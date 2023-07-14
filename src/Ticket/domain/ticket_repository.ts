import { Ticket } from "./ticket";

export interface TicketRepository {
  save(ticket: Ticket): Promise<Ticket | null>;
  find(tripId: string): Promise<Ticket | null>;
  update(tripId: string, data: any): Promise<Ticket | null>;
}
