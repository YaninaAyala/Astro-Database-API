//ROUTES
//Es el directorio que contiene los routers relativos a cada base de datos. Cada módulo router contiene dentro una instancia del Router de Express con todas los endpoints relativos a cada entidad.

import { Router } from "express";
import userController from "../controllers/user-controller";

const usersRouter = Router();

usersRouter.get("/", (request, response) => {
});

usersRouter.get("/:id", (request, response) => {
    userController.getById(request, response)
});

usersRouter.post("/", (request, response) => {
    userController.create(request, response)
});
usersRouter.patch("/id", (request, response) => {});
usersRouter.delete("/id", (request, response) => {});

export default usersRouter;