import { registerUser } from "../application/registerUserService";
import { loginUser } from "../application/loginUserService";
import UserInSqliteRepository from "./userInSqliteRepository";
import { SendEmailMessage } from "../../helpers/emailNotifier";

const userInSqliteRepository = new UserInSqliteRepository();
const messageSender = new SendEmailMessage();

const registerUserService = registerUser(userInSqliteRepository, messageSender);
const loginUserService = loginUser(userInSqliteRepository);

export { registerUserService, loginUserService };
