import { AppDataSource } from "../../db";
import { Ticket } from "../domain/ticket";
import { TicketRepository } from "../domain/ticket_repository";
import { TicketEntity } from "./database/entity/ticket";

export default class TicketInSqlite implements TicketRepository {
  ticketRepository = AppDataSource.getRepository(TicketEntity);

  async save(ticket: Ticket): Promise<Ticket | null> {
    return await this.ticketRepository.save(ticket);
  }

  async find(tripdId: string): Promise<Ticket | null> {
    return await this.ticketRepository.findOneBy({
      uuid: tripdId,
    });
  }

  async update(tripId: string, data: any): Promise<Ticket | null> {
    const foundTicket = await this.ticketRepository.findOneBy({
      uuid: tripId,
    });

    if (!foundTicket) return null;

    await this.ticketRepository.update({ uuid: tripId }, data);
    return foundTicket;
  }
}
