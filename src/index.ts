import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";

import express, { Express } from "express";

import { ticketRouter } from "./Ticket/infraestructure/ticket.router";
import { userRouter } from "./User/infraestructure/user.router";
import { tripRouter } from "./Trip/infraestructure/trip.router";
import { errorsMiddleware } from "./middlewares/errors";
import { AppDataSource } from "./db";

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/tickets", ticketRouter);
app.use("/users", userRouter);
app.use("/trips", tripRouter);
app.use(errorsMiddleware);

app.listen(port, async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database started");
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  } catch (error) {
    console.log(error);
  }
});
