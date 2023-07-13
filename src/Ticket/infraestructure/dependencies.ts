import { SendEmailMessage } from "../../helpers/emailNotifier";
import { sellTicket } from "../application/sellTicketService";
import { updateTicket } from "../application/updateTicketService";
import TicketInMemory from "./ticketInMemoryRepository";
import TripInMemory from "../../Trip/infraestructure/tripInMemoryRepository";
import UserInMemoryRepository from "../../User/infraestructure/userInMemoryRepository";
import { sellTicketWithCombination } from "../application/sellTicketWithCombination";

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
const sellTicketWithCombinationService = sellTicketWithCombination(
  userInMemoryRepository,
  tripInMemoryRepository,
  ticketInMemoryRepository,
  messageSender
);

export { sellTicketService, updateTicketService, sellTicketWithCombinationService };
