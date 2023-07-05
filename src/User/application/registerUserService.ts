import bcrypt from "bcrypt";
import { UserRepository } from "../domain/user_repository";

export const registerUser = (userRepository: UserRepository) => async (data: any) => {
  const { password } = data;

  const hashedPassword = await bcrypt.hash(password, 10);
  data.password = hashedPassword;

  return await userRepository.save(data);
};
