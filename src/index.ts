import express, { json } from "express";
import usersDb from "./database/users.json";
import chartsDb from "./database/natal-charts.json";

import chartsRouter from "./routers/chart-router";
import usersRouter from "./routers/user-router";

const PORT = 8080;
export const app = express();

app.use(json());

app.use("/api/charts", chartsRouter);
app.use("/api/users", usersRouter);

app.get("/", (request: any, response) => {
  response.status(200).json({ message: "soy la raíz" });
});

app.get("/api", (request: any, response) => {
  console.log(usersDb, chartsDb);
  const userInfo = usersDb.info;
  const chartsInfo = chartsDb.info;
  const description = {
    userInfo,
    chartsInfo,
  };
  response.status(200).json(description);
});

app.listen(PORT, () => {
  console.log("Server listening on port:", PORT);
});
