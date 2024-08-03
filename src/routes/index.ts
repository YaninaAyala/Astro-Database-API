import { Router } from "express";
import usersDb from "../database/users.json";
import chartsDb from "../database/natal-charts.json";
import usersRouter from "./user-router";
import chartsRouter from "./chart-router";

const indexRouter = Router();

indexRouter.get("/", (request: any, response) => {
    console.log(usersDb, chartsDb);
    const userInfo = usersDb.info;
    const chartsInfo = chartsDb.info;
    const description = {
      userInfo,
      chartsInfo,
    };
    response.status(200).json(description);
  });
  indexRouter.use("/users", usersRouter);
  usersRouter.use("/charts", chartsRouter);


  export default indexRouter