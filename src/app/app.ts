import Express from "express";
import path from "path";
import { config } from "../config";

import session from "express-session";
import { buildRouter } from "./router";
import { createSessionStore } from "../sessionStores";

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

async function buildApp() {
  const app = Express();
  const router = await buildRouter();

  app.enable("trust proxy");

  app.use(
    Express.static(path.join(__dirname, "..", "..", "src", "client", "dist"))
  );

  app.use(
    session({
      store: createSessionStore(),
      name: "pc_session",
      secret: config.SESSION_SECRET,
      rolling: true,
    })
  );

  app.use(router);

  return app;
}

export { buildApp };
