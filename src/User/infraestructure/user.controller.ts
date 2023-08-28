import { CustomError } from "../../errors/customError";
import { UserDtoSchema } from "../validations/user-create.validations";
import { loginUserService, registerUserService } from "./dependencies";

export const registerUserController = async (data: any) => {
  console.log(data);
  const parsedData = UserDtoSchema.safeParse(data);
  console.log(parsedData);
  if (!parsedData.success) {
    throw new CustomError("Invalid data for user", 400);
  }
  return await registerUserService(parsedData.data);
};

export const loginUserController = async (userName: string, password: string) => {
  return await loginUserService(userName, password);
};
