import { v4 } from "uuid";
import { CustomError } from "../../errors/customError";
import { SendEmailMessage } from "../../helpers/emailNotifier";
import { TripRepository } from "../../Trip/domain/trip_repository";
import { UserRepository } from "../../User/domain/user_repository";
import { Ticket } from "../domain/ticket";
import { TicketRepository } from "../domain/ticket_repository";

export const sellTicketWithCombination =
  (
    userRepository: UserRepository,
    tripRepository: TripRepository,
    ticketRepository: TicketRepository,
    sendMessage: SendEmailMessage
  ) =>
  async (userId: string, uuids: string[]) => {
    const tripsFound = await tripRepository.findManyByUUIDS(uuids);
    const foundUser = await userRepository.find(userId);
    if (!foundUser) throw new CustomError("User not found", 404);

    const promises = tripsFound.map(async (trip) => {
      const newTicket: Ticket = {
        uuid: v4(),
        passengerName: foundUser.name,
        passengerLastname: foundUser.lastName,
        passengerIdent: foundUser.ident,
        tripId: trip.uuid,
        tripName: trip.name,
        tripStartDate: trip.startDate,
        tripEndDate: trip.endDate,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await sendMessage.sendTicketEmail(foundUser.email, newTicket.uuid);
      return await ticketRepository.save(newTicket);
    });

    return await Promise.all(promises);
  };
