import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { ticketRouter } from "./Ticket/infraestructure/ticket.router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server is running");
});

app.use(express.json());
app.use("/tickets", ticketRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
