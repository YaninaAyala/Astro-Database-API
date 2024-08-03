//MODELS
//Contiene los modelos de user y chart. Cada uno tiene por objetivo ejecutar todas las acciones para poder interactuar con las bases de datos. Realiza tambien los chequeos relativos a si un usuario o carta ya existe en la base de datos.
import db from "../database/users.json";
import { writeFileSync } from "jsonfile";

class UserModel {
  constructor() {}

  getData() {
    return db;
  }
  writeData(data: {}) {
    writeFileSync("./src/database/users.json", data);
  }
}

const userModel = new UserModel();

export default userModel;