import { Request, Response, Router } from "express";
const router = Router();

export const todoRouter = router
  .get(`/`, (req: Request, res: Response) => {
    console.log("req", req.body);
    res.send(["tasksRouter task one", "tasksRouter task two"]);
  })
  .get("/:id", (req: Request, res: Response) => {
    // res.send("Task one");
    res.sendStatus(200);
  });
// .get(`${AUTH_URL}/token`, [authMiddleware], refreshToken)
