import sellTicket from "./dependencies";

export const sellTicketController = async (userId: any, tripId: any) => {
  await sellTicket(userId, tripId);
};
