import express, { Request, Response } from "express";
import { asyncHandler } from "../../handlers/asyncHandler";
import { registerUserController, loginUserController } from "./user.controller";
const userRouter = express.Router();

userRouter.post(
  "/register",
  asyncHandler(async (req: Request, res: Response) => {
    const body = req.body;
    const response = await registerUserController(body);

    res.status(200).json({ response });
  })
);

userRouter.post(
  "/login",
  asyncHandler(async (req: Request, res: Response) => {
    const { userName, password } = req.body;

    const response = await loginUserController(userName, password);

    res.status(200).json({ response });
  })
);

export { userRouter };
