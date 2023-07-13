import { findTripsWithCombination } from "../application/findTripsWithCombination";
import TripInMemory from "./tripInMemoryRepository";

const tripInMemory = new TripInMemory();

const findTripsWithCombinationService = findTripsWithCombination(tripInMemory);
export default findTripsWithCombinationService;
