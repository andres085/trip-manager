import { expect } from "chai";
import { sellTicket } from "../application/sellTicketService";
import sinon from "sinon";
import TicketInMemory from "../infraestructure/ticketInMemoryRepository";
import UserInMemoryRepository from "../infraestructure/userInMemoryRepository";
import TripInMemory from "../infraestructure/tripInMemoryRepository";
import { NotifyUser } from "../../helpers/notifier.interface";
import { User } from "../../User/domain/user";
import { Trip } from "../../Trip/domain/trip";

class SendMessageMock implements NotifyUser {
  async send(email: string, text: string) {
    console.log(`Sending message to ${email}, with ${text}`);
  }
}

describe("sellTicket", () => {
  it("should sell a ticket and return the new ticket object", async () => {
    // Create mocks or stubs for dependencies (userRepository, tripRepository, sendMessage)
    const ticketRepositoryMock = sinon.createStubInstance(TicketInMemory);
    const userRepositoryMock = sinon.createStubInstance(UserInMemoryRepository);
    const tripRepositoryMock = sinon.createStubInstance(TripInMemory);
    const sendMessageMock = sinon.createStubInstance(SendMessageMock);

    const mockUser: User = {
      name: "Andres",
      lastName: "Martinez",
      ident: "id1",
      address: "Colapiche 183, Rio Negro, Argentina",
      email: "andres@mail.com",
    };

    const mockTrip: Trip = {
      name: "Colombia Viajes",
      uuid: "asd1",
      from: "Buenos Aires, Argentina",
      to: "Medellin, Colombia",
      startDate: new Date(),
      endDate: new Date(),
      availableSeats: 10,
      price: 500,
    };

    userRepositoryMock.find.resolves(mockUser);
    tripRepositoryMock.find.resolves(mockTrip);

    // Call the sellTicket function
    const userId = "user123";
    const tripId = "trip123";
    const newTicket = await sellTicket(
      ticketRepositoryMock,
      userRepositoryMock,
      tripRepositoryMock,
      sendMessageMock
    )(userId, tripId);

    // Perform assertions
    expect(newTicket).to.be.an("object");
  });
});
