

import { Controller, HttpRequest, HttpResponse } from '../../protocols';
import { badRequest, ok, serverError } from '../../helpers/http-helper';
import { MissingParamError } from '../../errors';
import { GenericError } from '../../errors/generic-error';
import { AddAccount } from '../../../domain/usercases/account/add-account';
import { Account } from '../../../domain/models/Account';

export class SignUpController implements Controller {
    private readonly account: AddAccount
    constructor(account: AddAccount) {
        this.account = account;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const {
                nome,
                data_nasc,
                cpf,
                sexo,
                area_atuacao,
                numero_crfa,
                login,
                senha,
                senha_confirmacao,
                questao1,
                questao1_outro,
                questao2,
                questao2_outro,
                ciencia_confirmacao
            } = httpRequest.body;

            const requiredFields = ['nome', 'data_nasc', 'cpf', 'sexo', 'area_atuacao', 'numero_crfa', 'login', 'senha', 'senha_confirmacao', 'questao1', 'questao1_outro', 'questao2', 'questao2_outro', 'ciencia_confirmacao'];
            for (const field of requiredFields) {
                if (!httpRequest.body[field]) {
                    return badRequest(new MissingParamError(field))
                }
            }

            if(senha !== senha_confirmacao) {
                return badRequest(new GenericError('Senhas não conferem'))
            }

            const account: Account | Error = await this.account.add({
                nome: nome,
                data_nasc,
                cpf,
                sexo,
                area_atuacao,
                numero_crfa,
                login,
                senha,
                senha_confirmacao,
                questao1,
                questao1_outro,
                questao2,
                questao2_outro,
                ciencia_confirmacao
            });

            if( account instanceof Error) {
                return badRequest(new GenericError(account.message))
            }

            if (!account) {
                return badRequest(new GenericError('Erro ao criar usuario.'));
            }

            return ok({ data: account, message: 'Usuario criado com sucesso.' });
        } catch (err: any) {
            return serverError(Error(err));
        }
    }
}