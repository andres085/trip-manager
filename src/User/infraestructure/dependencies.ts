import { registerUser } from "../application/registerUserService";
import { loginUser } from "../application/loginUserService";
import UserInMemory from "./userInMemoryRepository";

const userInMemory = new UserInMemory();

const registerUserService = registerUser(userInMemory);
const loginUserService = loginUser(userInMemory);

export { registerUserService, loginUserService };
