import { buildApp } from "./app";
import { config } from "./config";

const app = buildApp();

app.listen(config.PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${config.PORT}`);
});
