import { findTripsWithCombinationService, saveNewTripService } from "./dependencies";

export const tripCombinationController = async (from: string, to: string) => {
  return await findTripsWithCombinationService(from, to);
};

export const saveNewTripController = async (data: any) => {
  return await saveNewTripService(data);
};
