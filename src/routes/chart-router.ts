///ROUTES
//Es el directorio que contiene los routers relativos a cada base de datos. Cada módulo router contiene dentro una instancia del Router de Express con todas los endpoints relativos a cada entidad.

import { request, response, Router } from "express";
import db from "../database/natal-charts.json";

const chartsRouter = Router()

chartsRouter.get("/", (request, response) => {
    response.status(200).json({message: db.charts})
});

chartsRouter.get("/:name", (request, response) => {response.status(200).json({message: db.charts[0]})  
});
chartsRouter.post("/", (request, response) => {});
chartsRouter.patch("/id", (request, response) => {});
chartsRouter.delete("/id", (request, response) => {});

export default chartsRouter