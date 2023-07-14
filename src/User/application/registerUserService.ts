import bcrypt from "bcrypt";
import { NotifyUser } from "../../helpers/notifier.interface";
import { UserRepository } from "../domain/user_repository";

export const registerUser = (userRepository: UserRepository, sendMessage: NotifyUser) => async (data: any) => {
  const { password } = data;

  const hashedPassword = await bcrypt.hash(password, 10);
  data.password = hashedPassword;

  const newUser = await userRepository.save(data);

  await sendMessage.sendUserEmail(newUser.email, newUser.ident);

  return newUser;
};
