

import { Controller, HttpRequest, HttpResponse } from '../../protocols';
import { badRequest, ok, serverError } from '../../helpers/http-helper';
import { GenericError } from '../../errors/generic-error';
import { Account } from '../../../domain/models/Account';
import { GetAccount } from '../../../domain/usercases/account/get-account';

export class GetDetailController implements Controller {
    private readonly getAccount: GetAccount
    constructor(getAccount: GetAccount) {
        this.getAccount = getAccount;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            console.log(httpRequest)
            const user: Account = await this.getAccount.get(httpRequest.body.userId);
            if (!user) {
                return badRequest(new GenericError('Usuário não encontrado.'));
            }
            return ok( { data: user, message: '' });

        } catch (error: any) {
            return serverError(error);
        }
    }
}