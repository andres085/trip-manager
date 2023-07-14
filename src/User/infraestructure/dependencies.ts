import { registerUser } from "../application/registerUserService";
import { loginUser } from "../application/loginUserService";
import UserInMemory from "./userInMemoryRepository";
import { SendEmailMessage } from "../../helpers/emailNotifier";

const userInMemory = new UserInMemory();
const messageSender = new SendEmailMessage();

const registerUserService = registerUser(userInMemory, messageSender);
const loginUserService = loginUser(userInMemory);

export { registerUserService, loginUserService };
