import { CustomError } from "../../errors/customError";
import { NotifyUser } from "../../helpers/notifier.interface";
import { TripRepository } from "../../Trip/domain/trip_repository";
import { UserRepository } from "../../User/domain/user_repository";
import { Ticket } from "../domain/ticket";
import { TicketRepository } from "../domain/ticket_repository";

export const sellTicket =
  (
    ticketRepository: TicketRepository,
    userRepository: UserRepository,
    tripRepository: TripRepository,
    sendMessage: NotifyUser
  ) =>
  async (userId: any, tripId: any) => {
    const foundUser = await userRepository.find(userId);

    if (!foundUser) throw new CustomError("User not found", 404);

    const foundTrip = await tripRepository.find(tripId);
    if (!foundTrip) throw new CustomError("Trip not found", 404);

    if (foundUser.age > 65 || foundUser.age < 10) {
      const discount = (foundTrip.price * 20) / 100;
      const newPrice = foundTrip.price - discount;
      await tripRepository.update(tripId, { price: newPrice });
    }

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

    await sendMessage.sendTicketEmail(foundUser.email, newTicket.uuid);

    return newTicket;
  };
