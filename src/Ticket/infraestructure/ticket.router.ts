import express, { Request, Response } from "express";
import { sellTicketController } from "./ticket.controller";
const ticketRouter = express.Router();

ticketRouter.post("/", async (req: Request, res: Response) => {
  const { userId, tripId } = req.query;
  const response = await sellTicketController(userId, tripId);

  return res.status(200).json({ response });
});

export { ticketRouter };
