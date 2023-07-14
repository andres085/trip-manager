import { TripRepository } from "../domain/trip_repository";

export const saveNewTrip = (tripRepository: TripRepository) => async (data: any) => {
  return await tripRepository.save(data);
};
