import { User } from "../domain/user";
import { UserRepository } from "../domain/user_repository";
import { v4 } from "uuid";

export default class UserInMemoryRepository implements UserRepository {
  users: User[] = [
    {
      name: "Andres",
      lastName: "Martinez",
      ident: v4(),
      address: "Colapiche 183, Rio Negro, Argentina",
      userName: "andresito1985",
      password: "4ndRes",
      email: "andres@mail.com",
    },
  ];

  async save(data: any): Promise<User> {
    const newUser: User = {
      name: data.name,
      lastName: data.name,
      ident: v4(),
      address: data.address,
      userName: data.userName,
      password: data.password,
      email: data.email,
    };

    this.users.push(newUser);

    return newUser;
  }

  async find(id: string): Promise<User | null> {
    const userFound = this.users.find((user) => user.ident === id);

    if (!userFound) {
      return null;
    }

    return userFound;
  }

  async findByUsername(userName: string): Promise<User | null> {
    const userFound = this.users.find((user) => user.userName === userName);

    if (!userFound) {
      return null;
    }

    return userFound;
  }
}
