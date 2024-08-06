//CONTROLLERS
//Tiene los controladores de user y chart. Son los encargados de manejar las Request/Response, de interactuar con los modelos, y de realizar chequeos.
import { Response } from "express";
import { Request } from "express";
import userModel from "../models/user-model";
import { validator } from "../schemas/users";
import { writeFileSync } from "jsonfile";
import db from "../database/users.json";

class UserController {
  constructor() {}

  getById(request: Request, response: Response) {
    const db = userModel.getData();
    const user = db.users.find((user) => request.params.id == user.id);
    response.status(200).json({ message: user });
  }
  create(request: Request, response: Response) {
    const result = validator(request.body);
    if (!result.success)
      return response.status(400).json({ error: result.error });
    const user = request.body;
    db.users.push(user);
    writeFileSync("./src/database/db.json", db.users);

    response.status(200).json({ message: "Creado exitosamente" });
  }

  deleteById(request: Request, response: Response) {}
  updateById(request: Request, response: Response) {}
}

const userController = new UserController();

export default userController;
