
import jwt from 'jsonwebtoken';
import { Controller, HttpRequest, HttpResponse } from '../../../protocols';
import { badRequest, ok, serverError } from '../../../helpers/http-helper';
import { LoginAccount } from '../../../../domain/usercases/account/login-account';
import { GenericError } from '../../../errors/generic-error';
import { Account } from '../../../../domain/models/Account';
export class SignInController implements Controller {
    private readonly loginAccount: LoginAccount
    constructor(loginAccount: LoginAccount) {
        this.loginAccount = loginAccount;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {

            const user: Account = await this.loginAccount.login(httpRequest.body);

            if (!user) {
                return badRequest(new GenericError('Usuário ou senha inválidos.'));
            }

            const id = Number(user.id);
            const token = jwt.sign({ id }, 'teste', {
                expiresIn: 300,
            });
            return ok({ auth: true, token_auth: token });

        } catch (error: any) {
            return serverError(error);
        }
    }
}