import Express, { Request, Response } from "express";
import path from "path";
import { config } from "./config";

const app = Express();

app.use(Express.static(path.join(__dirname, "..", "src", "client", "dist")));

app.get("/*", (_, res: Response) => {
  res.sendFile(
    path.join(__dirname, "..", "src", "client", "dist", "index.html")
  );
});

app.listen(config.PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${config.PORT}`);
});
