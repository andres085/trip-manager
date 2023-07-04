import { TicketRepository } from "../domain/ticket_repository";

export const updateTicket = (ticketRepository: TicketRepository) => async (tripId: any, data: any) => {
  const updatedTicket = await ticketRepository.update(tripId, data);

  if (!updatedTicket) {
    throw new Error("Ticket not found");
  }

  return updatedTicket;
};
