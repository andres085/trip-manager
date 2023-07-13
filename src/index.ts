import express, { Express } from "express";
import dotenv from "dotenv";
import { ticketRouter } from "./Ticket/infraestructure/ticket.router";
import { userRouter } from "./User/infraestructure/user.router";
import { tripRouter } from "./Trip/infraestructure/trip.router";
import { errorsMiddleware } from "./middlewares/errors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/tickets", ticketRouter);
app.use("/users", userRouter);
app.use("/trips", tripRouter);
app.use(errorsMiddleware);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
