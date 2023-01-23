import { Request, Response, Router } from "express";
const router = Router();

export const todoRouter = router.get(
  `/`,
  function (req: Request, res: Response) {
    res.send(["tasksRouter task one", "tasksRouter task two"]);
  }
);
// .get(`${AUTH_URL}/token`, [authMiddleware], refreshToken)
