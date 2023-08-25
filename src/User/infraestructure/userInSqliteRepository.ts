import { User } from "../domain/user";
import { UserRepository } from "../domain/user_repository";
import { v4 } from "uuid";
import { AppDataSource } from "../../db";
import { UserEntity } from "./database/entity/user";

export default class UserInSqliteRepository implements UserRepository {
  async save(data: any): Promise<User> {
    const newUser: User = {
      name: data.name,
      lastName: data.name,
      ident: v4(),
      address: data.address,
      userName: data.userName,
      password: data.password,
      email: data.email,
      age: data.age,
    };

    const userRepository = AppDataSource.getRepository(UserEntity);

    await userRepository.save(newUser);

    return newUser;
  }

  async find(id: string): Promise<User | null> {
    const userRepository = AppDataSource.getRepository(UserEntity);

    const userFound = await userRepository.findOneBy({
      ident: id,
    });

    if (!userFound) {
      return null;
    }

    return userFound;
  }

  async findByUsername(userName: string): Promise<User | null> {
    const userRepository = AppDataSource.getRepository(UserEntity);

    const userFound = await userRepository.findOneBy({
      userName,
    });

    if (!userFound) {
      return null;
    }

    return userFound;
  }
}
