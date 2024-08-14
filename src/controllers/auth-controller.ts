import { Request, Response } from "express";
import UserController from "./user-controller";
import AuthModel from "../models/auth-model";
import { v4 as uuidv4 } from "uuid";
import { createHash } from "../utils/hash";

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

    const token = uuidv4();
    db.auth.push({
      id: uuidv4(),
      userId: userId,
      password: createHash(password),
      token: token,
    });

    AuthModel.writeData(db);
    res.status(201).json({ message: "Usuario registrado", token: token });
  }

  static logIn(req: Request, res: Response) {
    const { password } = req.body;
    const user = UserController.getByEmail(req, res);

    if (!user) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    const userId = user.id;
    const authDb = AuthModel.getData().auth;
    const userAuth = authDb.find((user) => user.userId == userId);

    if (userAuth.password != createHash(password)) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    res.status(200).json({ message: "Bienvenido", token: userAuth.token });
  }
}

export default AuthController;
