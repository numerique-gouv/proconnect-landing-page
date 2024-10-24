import Express from "express";
import { config } from "../config";
import { Issuer } from "openid-client";
import path from "path";
import * as crypto from "crypto";

function buildRouter() {
  const router = Express.Router();

  router.get("/openid/authorize", async (req, res) => {
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

  router.get("/openid/oidc-callback", async (req, res) => {
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

  router.get("/api/me", (req, res) => {
    const { firstName, lastName, email, isIdentityProviderPCI } = req.session;
    res.json({ firstName, lastName, email, isIdentityProviderPCI });
  });

  router.get("/openid/logout", async (req, res) => {
    const client = await getProConnectClient();
    const id_token_hint = req.session.idToken;
    req.session.destroy();

    const redirectUrl = client.endSessionUrl({
      post_logout_redirect_uri: `${config.HOST_URL}/post-logout`,
      id_token_hint,
    });

    res.redirect(redirectUrl);
  });

  router.get("/*", (_, res) => {
    res.sendFile(
      path.join(__dirname, "..", "src", "client", "dist", "index.html")
    );
  });

  return router;
}

export { buildRouter };

async function getProConnectClient() {
  const pcIssuer = await Issuer.discover(config.PC_DISCOVERY_URL);

  return new pcIssuer.Client({
    client_id: config.PC_CLIENT_ID,
    client_secret: config.PC_CLIENT_SECRET,
    response_types: ["code"],
    id_token_signed_response_alg: config.PC_ID_TOKEN_SIGNED_RESPONSE_ALG,
    userinfo_signed_response_alg: config.PC_USERINFO_SIGNED_RESPONSE_ALG,
  });
}
