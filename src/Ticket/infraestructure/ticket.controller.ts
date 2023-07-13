import { sellTicketService, sellTicketWithCombinationService, updateTicketService } from "./dependencies";

export const sellTicketController = async (userId: any, tripId: any) => {
  return await sellTicketService(userId, tripId);
};

export const updateTicketController = async (tripId: any, data: any) => {
  return await updateTicketService(tripId, data);
};

export const sellTicketWithCombinationController = async (userId: string, uuids: string[]) => {
  return await sellTicketWithCombinationService(userId, uuids);
};
