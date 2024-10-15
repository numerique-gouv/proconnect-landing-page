import Express, { Request, Response } from "express";
import path from "path";

const app = Express();
const port = 3000;

app.use(Express.static(path.join(__dirname, "..", "src", "client", "dist")));

app.get("/*", (_, res: Response) => {
  res.sendFile(
    path.join(__dirname, "..", "src", "client", "dist", "index.html")
  );
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
