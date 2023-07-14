import { Ticket } from "../domain/ticket";
import { TicketRepository } from "../domain/ticket_repository";

export default class TicketInMemory implements TicketRepository {
  tickets: Ticket[] = [];

  async save(ticket: Ticket): Promise<Ticket | null> {
    if (!ticket) {
      return null;
    }
    this.tickets.push(ticket);
    return ticket;
  }

  async find(tripdId: string): Promise<Ticket | null> {
    const foundTicket = this.tickets.find((ticket) => ticket.tripId === tripdId);
    if (!foundTicket) return null;
    return foundTicket;
  }

  async update(tripId: string, data: any): Promise<Ticket | null> {
    const foundTicket = await this.find(tripId);
    if (!foundTicket) return null;

    const { startDate, endDate } = data;

    foundTicket.tripStartDate = startDate;
    foundTicket.tripEndDate = endDate;

    return foundTicket;
  }
}
