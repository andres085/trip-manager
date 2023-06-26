import { NotifyUser } from "../../helpers/notifier.interface";
import { TripRepository } from "../../Trip/domain/trip_repository";
import { UserRepository } from "../../User/domain/user_repository";
import { Ticket } from "../domain/ticket";
import { TicketRepository } from "../domain/ticket_repository";

export const updateTicket =
  (
    ticketRepository: TicketRepository,
    userRepository: UserRepository,
    tripRepository: TripRepository,
    sendMessage: NotifyUser
  ) =>
  async (userId: any, tripId: any) => {
    const foundUser = await userRepository.find(userId);
    if (!foundUser) throw new Error("User not found");

    const foundTrip = await tripRepository.find(tripId);
    if (!foundTrip) throw new Error("Trip not found");

    const newTicket: Ticket = {
      uuid: "asd",
      passengerName: foundUser.name,
      passengerLastname: foundUser.lastName,
      passengerIdent: foundUser.ident,
      tripId: foundTrip.uuid,
      tripName: foundTrip.name,
      tripStartDate: foundTrip.startDate,
      tripEndDate: foundTrip.endDate,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await ticketRepository.save(newTicket);

    await sendMessage.send(foundUser.email, newTicket.uuid);

    return newTicket;
  };
