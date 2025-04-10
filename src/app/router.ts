import Express, { Request } from "express";
import { config } from "../config";
import path from "path";
import * as crypto from "crypto";
import { buildRedirectController } from "./buildController";
import { buildOidcClient } from "./oidc";

const getCurrentUrl = (req: Request) =>
  new URL(`${req.protocol}://${req.get("host")}${req.originalUrl}`);

async function buildRouter() {
  const router = Express.Router();
  const oidcClient = await buildOidcClient();

  router.get(
    "/openid/authorize",
    buildRedirectController(async (req) => {
      const nonce = crypto.randomBytes(16).toString("hex");
      const state = crypto.randomBytes(16).toString("hex");

      req.session.state = state;
      req.session.nonce = nonce;

      return oidcClient.buildAuthorizationUrl({
        nonce,
        state,
      });
    })
  );

  router.get(
    "/openid/callback",
    buildRedirectController(async (req) => {
      const queryParams = req.query;
      const { state } = queryParams;
      const currentUrl = getCurrentUrl(req);

      if (state !== req.session.state) {
        throw new Error(
          `The provided state "${state}" does not match the stored session state "${req.session.state}"`
        );
      }
      if (req.session.nonce === null) {
        throw new Error(`No nonce stored in the session`);
      }
      const tokens = await oidcClient.authorizationCodeGrant(currentUrl, {
        expectedNonce: req.session.nonce,
        expectedState: req.session.state,
      });

      req.session.nonce = null;
      req.session.state = null;

      const claims = tokens.claims();
      if (!claims) {
        throw new Error(`No claims returned`);
      }

      const userinfo = await oidcClient.fetchUserInfo(
        tokens.access_token,
        claims.sub
      );

      req.session.idToken = tokens.id_token;
      req.session.email = userinfo.email;
      req.session.firstName = userinfo.given_name;
      req.session.lastName = userinfo.usual_name as string;
      req.session.isIdentityProviderPCI = userinfo.idp_id === config.PCI_IDP_ID;
      return `${config.HOST_URL}/post-authentication`;
    })
  );

  router.get(
    "/openid/logout",
    buildRedirectController(async (req) => {
      const id_token_hint = req.session.idToken;
      req.session.destroy();
      if (!id_token_hint) {
        return `${config.HOST_URL}/post-logout`;
      }

      return oidcClient.buildEndSessionUrl(id_token_hint);
    })
  );

  router.get("/api/me", (req, res) => {
    const { firstName, lastName, email, isIdentityProviderPCI } = req.session;
    res.json({ firstName, lastName, email, isIdentityProviderPCI });
  });

  router.get(/\/(.*)/, (_, res) => {
    res.sendFile(
      path.join(__dirname, "..", "..", "src", "client", "dist", "index.html")
    );
  });

  return router;
}

export { buildRouter };
