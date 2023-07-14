import { SendEmailMessage } from "../../helpers/emailNotifier";
import { sellTicket } from "../application/sellTicketService";
import { updateTicket } from "../application/updateTicketService";
import { sellTicketWithCombination } from "../application/sellTicketWithCombination";
import TicketInSqlite from "./ticketInSqliteRepository";
import TripInSqlite from "../../Trip/infraestructure/tripInSqliteRepository";
import UserInSqliteRepository from "../../User/infraestructure/userInSqliteRepository";

const ticketInSqliteRepository = new TicketInSqlite();
const tripInSqliteRepository = new TripInSqlite();
const userInSqlite = new UserInSqliteRepository();
const messageSender = new SendEmailMessage();

const sellTicketService = sellTicket(ticketInSqliteRepository, userInSqlite, tripInSqliteRepository, messageSender);
const updateTicketService = updateTicket(ticketInSqliteRepository);
const sellTicketWithCombinationService = sellTicketWithCombination(
  userInSqlite,
  tripInSqliteRepository,
  ticketInSqliteRepository,
  messageSender
);

export { sellTicketService, updateTicketService, sellTicketWithCombinationService };
