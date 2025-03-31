import { buildApp } from "./app";
import { config } from "./config";

async function runApp() {
  const app = await buildApp();

  app.listen(config.PORT, () => {
    console.log(
      `[server]: Server is running at http://localhost:${config.PORT}`
    );
  });
}

runApp();
