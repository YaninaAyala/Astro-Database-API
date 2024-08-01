//ROUTES
//Es el directorio que contiene los routers relativos a cada base de datos. Cada módulo router contiene dentro una instancia del Router de Express con todas los endpoints relativos a cada entidad.

import { Router } from "express";
import db from "../database/users.json";

const usersRouter = Router();

usersRouter.get("/", (request, response) => {});

export default usersRouter;