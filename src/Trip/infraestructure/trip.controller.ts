import { CustomError } from "../../errors/customError";
import { TripDtoSchema } from "../validations/trip-create.validations";
import { findTripsWithCombinationService, saveNewTripService } from "./dependencies";

export const tripCombinationController = async (from: string, to: string) => {
  return await findTripsWithCombinationService(from, to);
};

export const saveNewTripController = async (data: any) => {
  const parsedData = TripDtoSchema.safeParse(data);
  if (!parsedData.success) {
    throw new CustomError("Invalid data for trip", 400);
  }
  return await saveNewTripService(parsedData.data);
};
