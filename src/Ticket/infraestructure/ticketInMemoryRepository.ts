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
}
