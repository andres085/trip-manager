import { Trip } from "../domain/trip";
import { TripRepository } from "../domain/trip_repository";
import { v4 } from "uuid";

export default class TripInMemory implements TripRepository {
  trips: Trip[] = [
    {
      name: "Colombia Viajes",
      uuid: v4(),
      from: "Buenos Aires, Argentina",
      to: "Medellin, Colombia",
      startDate: new Date(),
      endDate: new Date(),
      availableSeats: 10,
      price: 500,
    },
  ];

  async find(id: string): Promise<Trip | undefined> {
    const foundTrip = this.trips.find((trip) => trip.uuid === id);
    if (!foundTrip) {
      return undefined;
    }
    return foundTrip;
  }
}
