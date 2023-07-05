import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { updateTicket } from "../application/updateTicketService";
import sinon from "sinon";
import TicketInMemory from "../infraestructure/ticketInMemoryRepository";
import UserInMemoryRepository from "../../User/infraestructure/userInMemoryRepository";
import { NotifyUser } from "../../helpers/notifier.interface";
import { User } from "../../User/domain/user";
import { Trip } from "../../Trip/domain/trip";
import { Ticket } from "../domain/ticket";

chai.use(chaiAsPromised);

class SendMessageMock implements NotifyUser {
  async send(email: string, text: string) {
    console.log(`Sending message to ${email}, with ${text}`);
  }
}

describe("sellTicket", () => {
  it("should update a ticket and return the updated ticket object", async () => {
    const ticketRepositoryMock = sinon.createStubInstance(TicketInMemory);
    const userRepositoryMock = sinon.createStubInstance(UserInMemoryRepository);

    const mockUser: User = {
      name: "Andres",
      lastName: "Martinez",
      ident: "id1",
      address: "Colapiche 183, Rio Negro, Argentina",
      userName: "andresito",
      password: "4ndres",
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

    const updateTripData = {
      passengerName: "Paco",
    };

    const updatedTicket: Ticket = {
      uuid: "123asd",
      passengerName: "Paco",
      passengerLastname: mockUser.lastName,
      passengerIdent: mockUser.ident,
      tripId: mockTrip.uuid,
      tripName: mockTrip.name,
      tripStartDate: mockTrip.startDate,
      tripEndDate: mockTrip.endDate,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    userRepositoryMock.find.resolves(mockUser);
    ticketRepositoryMock.update.resolves(updatedTicket);

    const tripId = "trip123";
    const newTicket = await updateTicket(ticketRepositoryMock)(tripId, updateTripData);

    expect(newTicket.passengerName).to.equal(updateTripData.passengerName);
  });

  it("should throw an error when selling a ticket if the trip is not found", async () => {
    const ticketRepositoryMock = sinon.createStubInstance(TicketInMemory);
    const userRepositoryMock = sinon.createStubInstance(UserInMemoryRepository);

    const mockUser: User = {
      name: "Andres",
      lastName: "Martinez",
      ident: "id1",
      address: "Colapiche 183, Rio Negro, Argentina",
      userName: "andresito",
      password: "4ndres",
      email: "andres@mail.com",
    };

    const updateTripData = {
      passengerName: "Paco",
    };

    userRepositoryMock.find.resolves(mockUser);
    ticketRepositoryMock.update.resolves(undefined);

    const tripId = "trip123";

    await expect(updateTicket(ticketRepositoryMock)(tripId, updateTripData)).to.eventually.be.rejectedWith(
      Error,
      "Ticket not found"
    );
  });
});
