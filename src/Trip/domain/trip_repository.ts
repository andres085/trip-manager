import { Trip } from "./trip";

export interface TripRepository {
  save(data: any): Promise<Trip>;
  find(id: string): Promise<Trip | null>;
  findMany(): Promise<Trip[]>;
  findManyByUUIDS(uuids: string[]): Promise<Trip[]>;
  update(id: string, data: any): Promise<Trip | null>;
}
