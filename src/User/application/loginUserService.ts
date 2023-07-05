import { User } from "../domain/user";
import { UserRepository } from "../domain/user_repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUser = (userRepository: UserRepository) => async (userName: string, password: string) => {
  const foundUser = (await userRepository.findByUsername(userName)) as User;

  if (!foundUser) throw new Error("User not found");

  const passwordMatch = await bcrypt.compare(password, foundUser.password);

  if (!passwordMatch) throw new Error("Invalid login credentials");

  return jwt.sign({ userUuid: foundUser.ident, usrname: foundUser.userName }, "ultrasecretkey");
};
