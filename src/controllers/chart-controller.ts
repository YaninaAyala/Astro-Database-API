///CONTROLLERS
//Tiene los controladores de user y chart. Son los encargados de manejar las Request/Response, de interactuar con los modelos, y de realizar chequeos.
import { Response } from "express";
import { Request } from "express";
import chartModel from "../models/chart-model";
import { validator } from "../schemas/users";
import { writeFileSync } from "jsonfile";
import db from "../database/natal-charts.json"

class ChartController {
  constructor() {}
  getAll(request: Request, response: Response) {
    const db = chartModel.getData();
    response.status(200).json(db.charts);
  }

  getById(request: Request, response: Response) {
    const db = chartModel.getData();
    const chart = db.charts.find((chart) => request.params.id == chart.id);
    response.status(200).json({ message: chart });
  }
  create(request: Request, response: Response) {
    const result = validator(request.body);
    if (!result.success)
      return response.status(400).json({ error: result.error });
    const chart = request.body;
    db.charts.push(chart);
    writeFileSync("./src/database/db.json", db.charts);

    response.status(200).json({ message: "Creado exitosamente" });
  }
  deleteById(request: Request, response: Response) {}
  updateById(request: Request, response: Response) {}
}

const chartController = new ChartController();

export default chartController;
