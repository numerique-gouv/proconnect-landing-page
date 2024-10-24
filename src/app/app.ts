import Express, { Response } from "express";
import path from "path";
import RedisStore from "connect-redis";
import { config } from "../config";

import session from "express-session";
import { buildRouter } from "./router";
import { getNewRedisClient } from "../connectors/reddis.connector";

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

function buildApp() {
  const app = Express();
  const router = buildRouter();

  app.use(
    Express.static(path.join(__dirname, "..", "..", "src", "client", "dist"))
  );

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

  app.use(router);

  return app;
}

export { buildApp };
