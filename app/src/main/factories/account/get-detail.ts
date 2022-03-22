import { DbGetAccount } from "../../../data/usecases/account/db-get-account";
import { LogWinstonRepository } from "../../../infra/local/log-repository/log-repository";
import { GetAccountRepository } from "../../../infra/repositories/account/get-repository";
import { GetDetailController } from "../../../presentation/controllers/account/get-detail";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decoratos/logs";

export const makeGetDetailController = (): Controller => {
    const accountRepository = new GetAccountRepository();
    const getAccount = new DbGetAccount(accountRepository);
    const getDetailController = new GetDetailController(getAccount);
    const logWinstonRepository = new LogWinstonRepository()
    
    return new LogControllerDecorator(getDetailController, logWinstonRepository);
}
