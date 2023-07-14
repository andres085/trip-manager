import { Trip } from "../domain/trip";
import { TripRepository } from "../domain/trip_repository";
import { v4 } from "uuid";

export default class TripInMemory implements TripRepository {
  trips: Trip[] = [
    {
      name: "Viedma - Bariloche",
      uuid: "81c96084-73be-4aba-be5f-74417fb36127",
      from: "Viedma",
      to: "Bariloche",
      startDate: new Date(),
      endDate: new Date(),
      availableSeats: 10,
      price: 800,
    },
    {
      name: "Bariloche - Buenos Aires",
      uuid: "0a54da12-2dc4-4cdc-b8a5-1dbab20b1ea8",
      from: "Bariloche",
      to: "Buenos Aires",
      startDate: new Date(),
      endDate: new Date(),
      availableSeats: 10,
      price: 500,
    },
    {
      name: "Viedma - Bahia Blanca",
      uuid: "2776bc23-80e6-4638-a006-dc1460ee8463",
      from: "Viedma",
      to: "Bahia Blanca",
      startDate: new Date(),
      endDate: new Date(),
      availableSeats: 10,
      price: 300,
    },
    {
      name: "Bahia Blanca - Buenos Aires",
      uuid: "9c017313-6fea-49fc-98a9-2416a34786ad",
      from: "Bahia Blanca",
      to: "Buenos Aires",
      startDate: new Date(),
      endDate: new Date(),
      availableSeats: 10,
      price: 700,
    },
  ];

  async save(data: any): Promise<Trip> {
    const newTrip: Trip = {
      uuid: v4(),
      name: data.name,
      from: data.from,
      to: data.to,
      startDate: data.startDate,
      endDate: data.endDate,
      availableSeats: data.availableSeats,
      price: data.price,
    };

    this.trips.push(newTrip);

    return newTrip;
  }
  async find(id: string): Promise<Trip | null> {
    const foundTrip = this.trips.find((trip) => trip.uuid === id);
    if (!foundTrip) {
      return null;
    }
    return foundTrip;
  }

  async findMany(): Promise<Trip[]> {
    return this.trips;
  }

  async findManyByUUIDS(uuids: string[]): Promise<Trip[]> {
    return this.trips.filter((trip) => uuids.includes(trip.uuid));
  }
}
