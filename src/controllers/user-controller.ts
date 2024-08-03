//CONTROLLERS
//Tiene los controladores de user y chart. Son los encargados de manejar las Request/Response, de interactuar con los modelos, y de realizar chequeos.
import userModel from "../models/user-model";

class UserController {
  constructor() {}

  getById(request, response) {
    const db = userModel.getData();
    const user = db.users.find((user) => request.params.id == user.id);
    response.status(200).json({ message: user });
  }
  deleteById(id: string) {}
  updateById(id: string) {}
  create(user: {}) {}
}

const userController = new UserController();

export default userController;