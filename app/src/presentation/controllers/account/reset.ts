import { Account } from "../../../domain/models/Account";
import { ResetAccount } from "../../../domain/usercases/account/reset-account";
import { GenericError } from "../../errors/generic-error";
import { EmailHelper } from "../../helpers/email/email-helper";
import { badRequest, ok, serverError } from "../../helpers/http-helper";
import { passwordGenerator } from "../../helpers/password-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class ResetAccountController implements Controller {
    private readonly resetAccount: ResetAccount
    constructor(resetAccount: ResetAccount) {
        this.resetAccount = resetAccount;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {

            const newPassword: string = passwordGenerator(10);
            const data = Object.assign({}, httpRequest.body, {
                senha: newPassword
            })
            const reset: number | Error = await this.resetAccount.reset(data);

            if (reset instanceof Error) {
                return badRequest(new GenericError(reset.message));
            }

            // REFACTOR
            const emailHelper = new EmailHelper();
            const responseEmail = await emailHelper.send(data.login, 'analise - Redefinir senha', await emailHelper.retornaEmailRedefinirSenha(data))

            return ok(responseEmail);

        } catch (error: any) {
            return serverError(error);
        }
    }
}