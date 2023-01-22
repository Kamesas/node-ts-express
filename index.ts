import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

var app: Express = express();

// app.get("/", (req: Request, res: Response) => {
//   res.send("hello upd");
// });

const port = process.env.PORT;

var tasks = require("./routes/tasks");
app.use("/tasks", tasks);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

// Export the Express API
module.exports = app;
