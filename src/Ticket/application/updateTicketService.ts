import { NotifyUser } from "../../helpers/notifier.interface";
import { UserRepository } from "../../User/domain/user_repository";
import { TicketRepository } from "../domain/ticket_repository";

export const updateTicket =
  (ticketRepository: TicketRepository, userRepository: UserRepository, sendMessage: NotifyUser) =>
  async (userId: any, tripId: any, data: any) => {
    const foundUser = await userRepository.find(userId);
    if (!foundUser) throw new Error("User not found");

    const updatedTicket = await ticketRepository.update(tripId, data);

    if (!updatedTicket) {
      throw new Error("Ticket not found");
    }

    await sendMessage.send(foundUser.email, updatedTicket.uuid);
    return updatedTicket;
  };
