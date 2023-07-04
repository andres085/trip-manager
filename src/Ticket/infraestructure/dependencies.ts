import { SendEmailMessage } from "../../helpers/emailNotifier";
import { sellTicket } from "../application/sellTicketService";
import { updateTicket } from "../application/updateTicketService";
import TicketInMemory from "./ticketInMemoryRepository";
import TripInMemory from "./tripInMemoryRepository";
import UserInMemoryRepository from "./userInMemoryRepository";

const ticketInMemoryRepository = new TicketInMemory();
const tripInMemoryRepository = new TripInMemory();
const userInMemoryRepository = new UserInMemoryRepository();
const messageSender = new SendEmailMessage();

const sellTicketService = sellTicket(
  ticketInMemoryRepository,
  userInMemoryRepository,
  tripInMemoryRepository,
  messageSender
);
const updateTicketService = updateTicket(ticketInMemoryRepository);

export { sellTicketService, updateTicketService };
