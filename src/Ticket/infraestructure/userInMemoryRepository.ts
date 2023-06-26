import { User } from "../../User/domain/user";
import { UserRepository } from "../../User/domain/user_repository";

export default class UserInMemoryRepository implements UserRepository {
  users: User[] = [
    {
      name: "Andres",
      lastName: "Martinez",
      ident: "id1",
      address: "Colapiche 183, Rio Negro, Argentina",
      email: "andres@mail.com",
    },
  ];

  async find(id: string): Promise<User | undefined> {
    const userFound = this.users.find((user) => user.ident === id);

    if (!userFound) {
      return undefined;
    }

    return userFound;
  }
}
