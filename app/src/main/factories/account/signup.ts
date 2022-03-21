import { DbAddAccount } from "../../../data/usecases/account/db-add-account";
import { BcryptAdapter } from "../../../infra/criptography/bcrypt-adapter";
import { LogWinstonRepository } from "../../../infra/local/log-repository/log-repository";
import { AddAccountRepository } from "../../../infra/repositories/account/add-repository";
import { SignUpController } from "../../../presentation/controllers/account/signup/signup";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decoratos/logs";


export const makeSignUpController = (): Controller => {
    const salt = 12;
    const bcryptAdapter = new BcryptAdapter(salt);
    const addAccountRepository = new AddAccountRepository();
    const addAccount = new DbAddAccount(bcryptAdapter, addAccountRepository);
    const singUpController = new SignUpController(addAccount);
    const logWinstonRepository = new LogWinstonRepository()
    return new LogControllerDecorator(singUpController, logWinstonRepository);
}
