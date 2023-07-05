import express, { Request, Response } from "express";
import { registerUserController, loginUserController } from "./user.controller";
const userRouter = express.Router();

userRouter.post("/register", async (req: Request, res: Response) => {
  const body = req.body;
  const response = await registerUserController(body);

  res.status(200).json({ response });
});

userRouter.post("/login", async (req: Request, res: Response) => {
  const { userName, password } = req.body;

  const response = await loginUserController(userName, password);

  res.status(200).json({ response });
});

export { userRouter };
