import { AddAccountRepository as IAddAccountRepository } from "../../../../data/protocols/account/add-account-repository";
import { GetAccountRepository as IGetAccountRepository } from "../../../../data/protocols/account/get-account-repository";
import { LoginAccountRepository as ILoginAccountRepository } from "../../../../data/protocols/account/login-account-repository";
import { Account } from "../../../../domain/models/Account";
import { AddAccountModel } from "../../../../domain/usercases/account/add-account";
import { LoginAccountModel } from "../../../../domain/usercases/account/login-account";
import { GenericError } from "../../../../presentation/errors/generic-error";

export class AccountRepository implements IAddAccountRepository, IGetAccountRepository, ILoginAccountRepository  {

    private async _exists(login: string): Promise<boolean> {
        const exists = await Account.findOne({
            where: {
                login: login,
            },
        });

        return !!exists;
    }

    async add(accountData: AddAccountModel): Promise<Account | Error> {

        if (await this._exists(accountData.login)) {
            return new GenericError('Login already exists');
        }
        const response = await Account.create({
            nome: accountData.nome,
            data_nasc: accountData.data_nasc,
            cpf: accountData.cpf,
            sexo: accountData.sexo,
            area_atuacao: accountData.area_atuacao,
            numero_crfa: accountData.numero_crfa,
            login: accountData.login,
            senha: accountData.senha,
            questao1: accountData.questao1,
            questao1_outro: accountData.questao1_outro,
            questao2: accountData.questao2,
            questao2_outro: accountData.questao2_outro,
            ciencia_confirmacao: accountData.ciencia_confirmacao,
        });

        return response;
    }


    async get(accountId: number): Promise<Account | Error> {

        const user = await Account.findOne({
            where: {
                id: accountId,
            },
            attributes: ['id','nome', 'data_nasc', 'cpf', 'sexo', 'area_atuacao', 'numero_crfa', 'login', 'senha', 'questao1', 'questao1_outro', 'questao2', 'questao2_outro', 'ciencia_confirmacao'],
        });


        if(!user) {
            return new GenericError('User not found');
        }
        
        return user as Account;
    }

    async login(accountData: LoginAccountModel): Promise<Account | Error> {

        const user = await Account.findOne({
            where: {
                login: accountData.login,
            },
            attributes: ['id','nome', 'data_nasc', 'cpf', 'sexo', 'area_atuacao', 'numero_crfa', 'login', 'senha', 'questao1', 'questao1_outro', 'questao2', 'questao2_outro', 'ciencia_confirmacao'],
        });

        if(!user) {
            return new GenericError('User not found or password is wrong');
        }

        return user as Account;
    }
}