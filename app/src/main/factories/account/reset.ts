import { DbResetAccount } from "../../../data/usecases/account/db-reset-account";
import { BcryptAdapter } from "../../../infra/criptography/bcrypt-adapter";
import { AccountRepository } from "../../../infra/db/repositories/account/account-repository";
import { LogWinstonRepository } from "../../../infra/local/log-repository/log-repository";
import { ResetAccountController } from "../../../presentation/controllers/account/reset";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decoratos/logs";

export const makeResetAccountController = (): Controller => {
    const salt = 12;
    const bcryptAdapter = new BcryptAdapter(salt);
    const accountRepository = new AccountRepository();
    const resetAccount = new DbResetAccount(bcryptAdapter, accountRepository);
    const getResetController = new ResetAccountController(resetAccount);
    const logWinstonRepository = new LogWinstonRepository()
    
    return new LogControllerDecorator(getResetController, logWinstonRepository);
}
