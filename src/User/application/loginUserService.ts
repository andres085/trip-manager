import { User } from "../domain/user";
import { UserRepository } from "../domain/user_repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { CustomError } from "../../errors/customError";

export const loginUser = (userRepository: UserRepository) => async (userName: string, password: string) => {
  const foundUser = (await userRepository.findByUsername(userName)) as User;

  if (!foundUser) throw new CustomError("User not found", 404);

  const passwordMatch = await bcrypt.compare(password, foundUser.password);

  if (!passwordMatch) throw new CustomError("Invalid login credentials", 401);

  return jwt.sign({ userUuid: foundUser.ident, usrname: foundUser.userName }, "ultrasecretkey");
};
