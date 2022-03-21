import { LogWinstonRepository } from "../../../infra/local/log-repository/log-repository";
import { SignInController } from "../../../presentation/controllers/account/signin/signin";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decoratos/logs";


export const makeSignInController = (): Controller => {
    const singInController = new SignInController();
    const logWinstonRepository = new LogWinstonRepository()
    return new LogControllerDecorator(singInController, logWinstonRepository);
}
