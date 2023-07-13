import { Trip } from "../domain/trip";
import { TripRepository } from "../domain/trip_repository";

type Graph = {
  [key: string]: {
    [key: string]: number;
  };
};

function createGraphFromTrips(trips: Trip[]): Graph {
  let graph: Graph = {};

  for (let trip of trips) {
    if (!graph[trip.from]) {
      graph[trip.from] = {};
    }
    graph[trip.from][trip.to] = trip.price;
  }

  return graph;
}

type CityPairToTripUUID = {
  [key: string]: string;
};

function createCityPairToTripUUID(trips: Trip[]): CityPairToTripUUID {
  let cityPairToTripUUID: CityPairToTripUUID = {};
  for (let trip of trips) {
    let { from, to, uuid } = trip;
    cityPairToTripUUID[`${from}-${to}`] = uuid;
  }
  return cityPairToTripUUID;
}

function dijkstra(trips: Trip[], start: string, end: string) {
  const graph = createGraphFromTrips(trips);
  let costs: { [key: string]: number } = {};
  let parents: { [key: string]: string | null } = {};
  let processed: string[] = [];
  let cityPairToTripUUID: CityPairToTripUUID = createCityPairToTripUUID(trips);

  costs[end] = Infinity;
  parents[end] = null;

  for (let city in graph[start]) {
    costs[city] = graph[start][city];
    parents[city] = start;
  }

  let city = findLowestCostCity(costs, processed);

  while (city) {
    let cost = costs[city];
    let neighbors = graph[city];
    for (let n in neighbors) {
      let newCost = cost + neighbors[n];
      if (!costs[n] || costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = city;
      }
    }
    processed.push(city);
    city = findLowestCostCity(costs, processed);
  }

  let shortestPath = [end];
  let parent = parents[end];
  while (parent) {
    shortestPath.push(parent);
    parent = parents[parent];
  }
  shortestPath.reverse();

  let tripUUIDs: string[] = [];
  for (let i = 0; i < shortestPath.length - 1; i++) {
    let city1 = shortestPath[i];
    let city2 = shortestPath[i + 1];
    let tripUUID = cityPairToTripUUID[`${city1}-${city2}`];
    if (tripUUID) {
      tripUUIDs.push(tripUUID);
    }
  }

  return {
    path: shortestPath,
    tripUUIDs,
    cost: costs[end],
  };
}

function findLowestCostCity(costs: { [key: string]: number }, processed: string[]): string | null {
  let lowestCost = Infinity;
  let lowestCostCity = null;

  for (let city in costs) {
    let cost = costs[city];
    if (cost < lowestCost && !processed.includes(city)) {
      lowestCost = cost;
      lowestCostCity = city;
    }
  }

  return lowestCostCity;
}

export const findTripsWithCombination = (tripRepository: TripRepository) => async (from: string, to: string) => {
  const trips: Trip[] = await tripRepository.findMany();

  let result = dijkstra(trips, from, to);

  return result;
};
