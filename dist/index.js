"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = (0, express_1.default)();
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
