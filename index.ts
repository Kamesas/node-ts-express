import express, { Express, Request, Response } from "express";

import dotenv from "dotenv";
import { todoRouter } from "./components/todo";
dotenv.config();

var app: Express = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Node ts rest api");
});

const port = process.env.PORT;

app.use("/api/todo", todoRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

module.exports = app;
