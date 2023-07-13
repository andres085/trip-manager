import express, { Request, Response } from "express";
import { asyncHandler } from "../../handlers/asyncHandler";
import { tripCombinationController } from "./trip.controller";
const tripRouter = express.Router();

tripRouter.post(
  "/combination-trips",
  asyncHandler(async (req: Request, res: Response) => {
    const { from, to } = req.body;
    const response = await tripCombinationController(from, to);

    res.status(200).json({ response });
  })
);

export { tripRouter };
