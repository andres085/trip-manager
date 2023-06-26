import { User } from "./user";

export interface UserRepository {
  find(id: string): Promise<User | undefined>;
}
