import express, { Request, Response } from "express";
import { asyncHandler } from "../../handlers/asyncHandler";
import { sellTicketController, sellTicketWithCombinationController, updateTicketController } from "./ticket.controller";
import { authenticateJWT, RequestWithUser } from "../../middlewares/auth";
const ticketRouter = express.Router();

ticketRouter.post(
  "/",
  authenticateJWT,
  asyncHandler(async (req: Request, res: Response) => {
    const reqWithUser = req as RequestWithUser;
    const userId = reqWithUser.user?.userUuid;
    const { tripId } = req.query;

    const response = await sellTicketController(userId, tripId);

    return res.status(200).json({ response });
  })
);

ticketRouter.put(
  "/",
  authenticateJWT,
  asyncHandler(async (req: Request, res: Response) => {
    const { tripId } = req.query;
    const response = await updateTicketController(tripId, req.body);

    return res.status(200).json({ response });
  })
);

ticketRouter.post(
  "/sell-ticket-combination",
  authenticateJWT,
  asyncHandler(async (req: Request, res: Response) => {
    const reqWithUser = req as RequestWithUser;
    const userId = reqWithUser.user?.userUuid;
    const { uuids } = req.body;
    const response = await sellTicketWithCombinationController(userId, uuids);

    return res.status(200).json({ response });
  })
);

export { ticketRouter };
