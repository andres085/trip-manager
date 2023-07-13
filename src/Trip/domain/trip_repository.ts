import { Trip } from "./trip";

export interface TripRepository {
  find(id: string): Promise<Trip | null>;
  findMany(): Promise<Trip[]>;
  findManyByUUIDS(uuids: string[]): Promise<Trip[]>;
}
