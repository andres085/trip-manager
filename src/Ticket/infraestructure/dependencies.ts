// import SendLogMessage from "../../helpers/logNotifier";
import { SendEmailMessage } from "../../helpers/emailNotifier";
import { sellTicket } from "../application/sellTicketService";
import TicketInMemory from "./ticketInMemoryRepository";
import TripInMemory from "./tripInMemoryRepository";
import UserInMemoryRepository from "./userInMemoryRepository";

const ticketInMemoryRepository = new TicketInMemory();
const tripInMemoryRepository = new TripInMemory();
const userInMemoryRepository = new UserInMemoryRepository();
const messageSender = new SendEmailMessage();

export default sellTicket(ticketInMemoryRepository, userInMemoryRepository, tripInMemoryRepository, messageSender);