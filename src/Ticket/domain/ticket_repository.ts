import { Ticket } from "./ticket";

export interface TicketRepository {
  save(ticket: Ticket): Promise<Ticket | undefined>;
}
