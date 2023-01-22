import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

var app: Express = express();
app.get("/home", (req: Request, res: Response) => {
  res.send("hello upd");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
