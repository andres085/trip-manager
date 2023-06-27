import { Ticket } from "./ticket";

export interface TicketRepository {
  save(ticket: Ticket): Promise<Ticket | undefined>;
  find(tripId: string): Promise<Ticket | undefined>;
  update(tripId: string, data: any): Promise<Ticket | undefined>;
}
