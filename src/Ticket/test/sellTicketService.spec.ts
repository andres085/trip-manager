import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { sellTicket } from "../application/sellTicketService";
import sinon from "sinon";
import TicketInMemory from "../infraestructure/ticketInMemoryRepository";
import UserInMemoryRepository from "../infraestructure/userInMemoryRepository";
import TripInMemory from "../infraestructure/tripInMemoryRepository";
import { NotifyUser } from "../../helpers/notifier.interface";
import { User } from "../../User/domain/user";
import { Trip } from "../../Trip/domain/trip";

chai.use(chaiAsPromised);

class SendMessageMock implements NotifyUser {
  async send(email: string, text: string) {
    console.log(`Sending message to ${email}, with ${text}`);
  }
}

describe("sellTicket", () => {
  it("should sell a ticket and return the new ticket object", async () => {
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

    const userId = "user123";
    const tripId = "trip123";
    const newTicket = await sellTicket(
      ticketRepositoryMock,
      userRepositoryMock,
      tripRepositoryMock,
      sendMessageMock
    )(userId, tripId);

    expect(newTicket).to.be.an("object");
  });

  it("should sell a ticket and call the send method from the SendEmail object", async () => {
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

    const userId = "user123";
    const tripId = "trip123";
    await sellTicket(ticketRepositoryMock, userRepositoryMock, tripRepositoryMock, sendMessageMock)(userId, tripId);

    expect(sendMessageMock.send.calledOnce).to.be.true;
  });

  it("should throw an error when selling a ticket if the user is not found", async () => {
    const ticketRepositoryMock = sinon.createStubInstance(TicketInMemory);
    const userRepositoryMock = sinon.createStubInstance(UserInMemoryRepository);
    const tripRepositoryMock = sinon.createStubInstance(TripInMemory);
    const sendMessageMock = sinon.createStubInstance(SendMessageMock);

    const userId = "user123";
    const tripId = "trip123";

    userRepositoryMock.find.resolves(undefined);
    tripRepositoryMock.find.resolves(undefined);

    await expect(
      sellTicket(ticketRepositoryMock, userRepositoryMock, tripRepositoryMock, sendMessageMock)(userId, tripId)
    ).to.eventually.be.rejectedWith(Error, "User not found");
  });

  it("should throw an error when selling a ticket if the trip is not found", async () => {
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

    const userId = "user123";
    const tripId = "trip123";

    userRepositoryMock.find.resolves(mockUser);
    tripRepositoryMock.find.resolves(undefined);

    await expect(
      sellTicket(ticketRepositoryMock, userRepositoryMock, tripRepositoryMock, sendMessageMock)(userId, tripId)
    ).to.eventually.be.rejectedWith(Error, "Trip not found");
  });
});
