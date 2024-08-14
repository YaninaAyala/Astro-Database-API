import { NextFunction, Request, Response } from "express";
import AuthModel from "../models/auth-model";

export function checkToken(req: Request, res: Response, next: NextFunction) {
  if (!req.query.token) {
    return res.status(400).json({ message: "El token es requerido" });
  }
  const { auth } = AuthModel.getData();
  const authUser = auth.find((user) => user.token == req.query.token);
  if (!authUser) {
    return res.status(401).json({ message: "Token invalido" });
  }
  next();
}
