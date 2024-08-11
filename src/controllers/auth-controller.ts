import { Request, Response } from "express";
import UserController from "./user-controller";
import AuthModel from "../models/auth-model";
import { v4 as uuidv4 } from "uuid";

class AuthController {
  static register(req: Request, res: Response) {
    const { password } = req.body;
    const user = UserController.getByEmail(req, res);
    if (user) {
      return res.status(400).json({ message: "El email ya existe" });
    }
    const userId = UserController.create(req, res);
    if (!userId) {
      return res.status(400).json({ message: "Datos invalidos" });
    }
    const db = AuthModel.getData();
    db.auth.push({
      id: uuidv4(),
      userId: userId,
      password: password,
    });

    AuthModel.writeData(db);
    res.status(201).json({ message: "Usuario registrado" });
  }
}

export default AuthController;
