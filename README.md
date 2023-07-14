# Trip Manager

Practice project carried out with hexagonal architecture, TypeScript, and Express consisting of an API for managing trips.

### Project start

Copy the .env.example file and fill it with your credentials:

```bash
cp .env.example .env
```

 Install dependencies for the project execute with npm:

```bash
npm install
```

With yarn:

```bash
yarn
```


### Endpoints

Register user:

`localhost:8000/users/register`

Login user:

`localhost:8000/users/login`

Sell ticket:

`localhost:8000/tickets?userId=123&tripId=456`

Update ticket:

`localhost:8000/tickets?userId=id1&tripId=asd1`

Trip Combination:

`localhost:8000/trips/combination-trips`

Sell Ticket Combination

`localhost:8000/tickets/sell-ticket-combination`

Save New Trip:

`localhost:8000/trips/create-trip`
