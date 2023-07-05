import express, { Request, Response } from "express";
import { asyncHandler } from "../../handlers/asyncHandler";
import { sellTicketController, updateTicketController } from "./ticket.controller";
const ticketRouter = express.Router();

ticketRouter.post(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    const { userId, tripId } = req.query;
    const response = await sellTicketController(userId, tripId);

    return res.status(200).json({ response });
  })
);

ticketRouter.put(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    const { tripId } = req.query;
    const response = await updateTicketController(tripId, req.body);

    return res.status(200).json({ response });
  })
);

export { ticketRouter };
