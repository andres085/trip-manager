import { DataSource } from "typeorm";
import { UserEntity } from "../User/infraestructure/database/entities/user";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./mydb.sqlite", // path to SQLite database file
  // entities: [__dirname + "/../entity/*.ts"], // path to your entities
  entities: [UserEntity], // path to your entities
  synchronize: true,
  logging: false,
});
