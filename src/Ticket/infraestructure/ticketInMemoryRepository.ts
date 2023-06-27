import { Ticket } from "../domain/ticket";
import { TicketRepository } from "../domain/ticket_repository";

export default class TicketInMemory implements TicketRepository {
  tickets: Ticket[] = [];

  async save(ticket: Ticket): Promise<Ticket | undefined> {
    if (!ticket) {
      return undefined;
    }
    this.tickets.push(ticket);
    return ticket;
  }

  async find(tripdId: string): Promise<Ticket | undefined> {
    return this.tickets.find((ticket) => ticket.tripId === tripdId);
  }

  async update(tripId: string, data: any): Promise<Ticket | undefined> {
    const foundTicket = await this.find(tripId);
    if (!foundTicket) return undefined;

    const { startDate, endDate } = data;

    foundTicket.tripStartDate = startDate;
    foundTicket.tripEndDate = endDate;

    return foundTicket;
  }
}
