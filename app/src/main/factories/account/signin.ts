import { DbLoginAccount } from "../../../data/usecases/account/db-login-account";
import { BcryptAdapter } from "../../../infra/criptography/bcrypt-adapter";
import { AccountRepository } from "../../../infra/db/repositories/account/account-repository";
import { LogWinstonRepository } from "../../../infra/local/log-repository/log-repository";
import { SignInController } from "../../../presentation/controllers/account/signin";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decoratos/logs";


export const makeSignInController = (): Controller => {
    const salt = 12;
    const bcryptAdapter = new BcryptAdapter(salt);
    const accountRepository = new AccountRepository();
    const loginAccount = new DbLoginAccount(bcryptAdapter, accountRepository);
    const singInController = new SignInController(loginAccount);
    const logWinstonRepository = new LogWinstonRepository()
    
    return new LogControllerDecorator(singInController, logWinstonRepository);
}
