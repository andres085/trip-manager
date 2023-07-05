import { registerUserService, loginUserService } from "./dependencies";

export const registerUserController = async (data: any) => {
  return await registerUserService(data);
};

export const loginUserController = async (userName: string, password: string) => {
  return await loginUserService(userName, password);
};
