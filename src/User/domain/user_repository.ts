import { User } from "./user";

export interface UserRepository {
  save(data: any): Promise<User>;
  find(id: string): Promise<User | undefined>;
  findByUsername(username: string): Promise<User | undefined>;
}
