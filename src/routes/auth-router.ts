import { Request, Response, Router } from "express";
import AuthController from "../controllers/auth-controller";
const authRouter = Router();

authRouter.post("/register", (req: Request, res: Response) => {
  AuthController.register(req, res);
});

export default authRouter;
