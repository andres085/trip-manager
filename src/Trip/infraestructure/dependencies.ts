import { findTripsWithCombination } from "../application/findTripsWithCombination";
import { saveNewTrip } from "../application/saveNewTrip";
import TripInSqlite from "./tripInSqliteRepository";

const tripInSqlite = new TripInSqlite();

const findTripsWithCombinationService = findTripsWithCombination(tripInSqlite);
const saveNewTripService = saveNewTrip(tripInSqlite);
export { findTripsWithCombinationService, saveNewTripService };
