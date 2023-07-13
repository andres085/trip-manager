import findTripsWithCombinationService from "./dependencies";

export const tripCombinationController = async (from: string, to: string) => {
  return await findTripsWithCombinationService(from, to);
};
