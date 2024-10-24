import Express, { Response } from "express";
import path from "path";
import RedisStore from "connect-redis";
import { config } from "./config";
import { Issuer } from "openid-client";
import * as crypto from "crypto";
import session from "express-session";
import { getNewRedisClient } from "./connectors/reddis.connector";

const app = Express();

app.use(Express.static(path.join(__dirname, "..", "src", "client", "dist")));

app.use(
  session({
    store: new RedisStore({
      client: getNewRedisClient(),
      prefix: "pc:session:",
    }),
    name: "pc_session",
    secret: config.SESSION_SECRET,
    rolling: true,
  })
);

declare module "express-session" {
  interface SessionData {
    state: string | null;
    nonce: string | null;
    idToken: string | undefined;
    destroy: () => void;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    isIdentityProviderPCI: boolean | null;
  }
}

app.get("/openid/authorize", async (req, res) => {
  const client = await getProConnectClient();
  const acr_values = config.PC_ACR_VALUES;
  const scope = config.PC_SCOPES;
  const nonce = crypto.randomBytes(16).toString("hex");
  const state = crypto.randomBytes(16).toString("hex");

  req.session.state = state;
  req.session.nonce = nonce;

  const redirectUrl = client.authorizationUrl({
    scope,
    acr_values,
    nonce,
    state,
    redirect_uri: `${config.HOST_URL}/openid/oidc-callback`,
    claims: {
      id_token: {
        amr: {
          essential: true,
        },
      },
    },
  });

  res.redirect(redirectUrl);
});

app.get("/openid/oidc-callback", async (req, res) => {
  const client = await getProConnectClient();
  const params = client.callbackParams(req);
  if (params.state !== req.session.state) {
    throw new Error("WRONG STATE");
  }
  if (req.session.nonce === null) {
    throw new Error("NO NONCE");
  }
  const tokenSet = await client.callback(
    `${config.HOST_URL}/openid/oidc-callback`,
    params,
    {
      state: req.session.state,
      nonce: req.session.nonce,
    }
  );
  req.session.nonce = null;
  req.session.state = null;
  if (!tokenSet.access_token) {
    throw new Error("NO ACCESS TOKEN");
  }

  const userinfo = await client.userinfo(tokenSet.access_token);

  req.session.idToken = tokenSet.id_token;
  req.session.email = userinfo.email;
  req.session.firstName = userinfo.given_name;
  req.session.lastName = userinfo.usual_name as string;
  req.session.isIdentityProviderPCI = userinfo.idp_id === config.PCI_IDP_ID;
  res.redirect(`${config.HOST_URL}/post-authentication`);
});

app.get("/api/me", (req, res) => {
  const { firstName, lastName, email, isIdentityProviderPCI } = req.session;
  res.json({ firstName, lastName, email, isIdentityProviderPCI });
});

app.get("/openid/logout", async (req, res) => {
  const client = await getProConnectClient();
  const id_token_hint = req.session.idToken;
  req.session.destroy();

  const redirectUrl = client.endSessionUrl({
    post_logout_redirect_uri: `${config.HOST_URL}/post-logout`,
    id_token_hint,
  });

  res.redirect(redirectUrl);
});

app.get("/*", (_, res: Response) => {
  res.sendFile(
    path.join(__dirname, "..", "src", "client", "dist", "index.html")
  );
});

app.listen(config.PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${config.PORT}`);
});

const getProConnectClient = async () => {
  const pcIssuer = await Issuer.discover(config.PC_DISCOVERY_URL);

  return new pcIssuer.Client({
    client_id: config.PC_CLIENT_ID,
    client_secret: config.PC_CLIENT_SECRET,
    response_types: ["code"],
    id_token_signed_response_alg: config.PC_ID_TOKEN_SIGNED_RESPONSE_ALG,
    userinfo_signed_response_alg: config.PC_USERINFO_SIGNED_RESPONSE_ALG,
  });
};
