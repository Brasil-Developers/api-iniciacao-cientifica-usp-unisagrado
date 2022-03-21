import { BcryptAdapter } from "../../../infra/criptography/bcrypt-adapter";
import { LogWinstonRepository } from "../../../infra/local/log-repository/log-repository";
import { AccountRepository } from "../../../infra/repositories/account/account-repository";
import { SignUpController } from "../../../presentation/controllers/account/signup/signup";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decoratos/logs";


export const makeSignUpController = (): Controller => {
    const salt = 12;
    const bcryptAdapter = new BcryptAdapter(salt);
    const accountRepository = new AccountRepository();
    const singUpController = new SignUpController();
    const logWinstonRepository = new LogWinstonRepository()
    return new LogControllerDecorator(singUpController, logWinstonRepository);
}
