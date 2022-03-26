import { DbGetAccount } from "../../../data/usecases/account/db-get-account";
import { LogWinstonRepository } from "../../../infra/local/log-repository/log-repository";
import { GetDetailController } from "../../../presentation/controllers/account/get-detail";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decoratos/logs";
import { AccountRepository } from "../../../infra/db/repositories/account/account-repository";

export const makeGetDetailController = (): Controller => {
    const accountRepository = new AccountRepository();
    const getAccount = new DbGetAccount(accountRepository);
    const getDetailController = new GetDetailController(getAccount);
    const logWinstonRepository = new LogWinstonRepository()
    
    return new LogControllerDecorator(getDetailController, logWinstonRepository);
}
