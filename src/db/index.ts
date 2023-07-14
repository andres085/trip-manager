import { DataSource } from "typeorm";
import { TicketEntity } from "../Ticket/infraestructure/database/entity/ticket";
import { TripEntity } from "../Trip/infraestructure/database/entity/trip";
import { UserEntity } from "../User/infraestructure/database/entity/user";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./mydb.sqlite",
  entities: [UserEntity, TripEntity, TicketEntity],
  synchronize: true,
  logging: false,
});
