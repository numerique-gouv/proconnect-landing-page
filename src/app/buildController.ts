import { Request, Response } from "express";
import { config } from "../config";

export { buildRedirectController };

function buildRedirectController(
  controller: (req: Request) => string | Promise<string>
) {
  return async (req: Request, res: Response) => {
    try {
      const redirectUrl = await controller(req);
      res.redirect(redirectUrl);
    } catch (error) {
      console.error(error);
      res.redirect(`${config.HOST_URL}/error`);
    }
  };
}
