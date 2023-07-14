import { Trip } from "../domain/trip";
import { TripRepository } from "../domain/trip_repository";
import { AppDataSource } from "../../db";
import { TripEntity } from "./database/entity/trip";
import { In } from "typeorm";
import { v4 } from "uuid";

export default class TripInSqlite implements TripRepository {
  tripRepository = AppDataSource.getRepository(TripEntity);

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

    await this.tripRepository.save(newTrip);

    return newTrip;
  }

  async find(id: string): Promise<Trip | null> {
    const foundTrip = await this.tripRepository.findOneBy({
      uuid: id,
    });

    if (!foundTrip) {
      return null;
    }
    return foundTrip;
  }

  async findMany(): Promise<Trip[]> {
    return this.tripRepository.find();
  }

  async findManyByUUIDS(uuids: string[]): Promise<Trip[]> {
    return this.tripRepository.find({
      where: {
        uuid: In(uuids),
      },
    });
  }
}
