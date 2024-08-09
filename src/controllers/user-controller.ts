//CONTROLLERS
//Tiene los controladores de user y chart. Son los encargados de manejar las Request/Response, de interactuar con los modelos, y de realizar chequeos.
import { Response, Request } from "express";
import userModel from "../models/user-model";
import { usersValidator } from "../schemas/users";
import { writeFileSync } from "jsonfile";

class UserController {
  constructor() {}

   getById(request: Request, response: Response) {
  //   const db = userModel.getData();
  //   const user = db.users.find((user) => user.id == request.params.id );
  //   response.status(200).json({ message: user });
   }
  create(request: Request, response: Response) {
    const db = userModel.getData();
    const result = usersValidator(request.body);
    console.log(result);
    
    if (!result.success) response.status(400).json({ error: result.error });
    const user = request.body;
    console.log(db);
    //db.users.push(user);
    //writeFileSync("./src/database/users.json", db.users);

    response.status(200).json({ message: "Creado exitosamente" });
  }


  updateById(request: Request, response: Response) {}
}

const userController = new UserController();

export default userController;
