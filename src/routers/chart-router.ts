///ROUTES
//Es el directorio que contiene los routers relativos a cada base de datos. Cada módulo router contiene dentro una instancia del Router de Express con todas los endpoints relativos a cada entidad.

import { Router } from "express";
import db from "../database/natal-charts.json";

const chartsRouter = Router()

chartsRouter.get("/", (request, response) => {
    console.log('hola');
    
})

export default chartsRouter