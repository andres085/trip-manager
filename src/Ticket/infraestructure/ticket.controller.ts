import { sellTicketService, updateTicketService } from "./dependencies";

export const sellTicketController = async (userId: any, tripId: any) => {
  return await sellTicketService(userId, tripId);
};

export const updateTicketController = async (userId: any, tripId: any, data: any) => {
  return await updateTicketService(userId, tripId, data);
};
