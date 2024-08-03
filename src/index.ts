import express, { json } from "express";

import indexRouter from "./routes";

const PORT = 8080;
export const app = express();

app.use(json());


app.get("/", (request: any, response) => {
  response.status(200).json({ message: "soy la raíz" });
});

app.use("/api", indexRouter );

app.listen(PORT, () => {
  console.log("Server listening on port:", PORT);
});
