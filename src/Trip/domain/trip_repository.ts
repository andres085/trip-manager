import { Trip } from "./trip";

export interface TripRepository {
  find(id: string): Promise<Trip | undefined>;
}
