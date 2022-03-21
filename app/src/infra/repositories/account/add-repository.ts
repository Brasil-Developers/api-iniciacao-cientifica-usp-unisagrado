import { AddAccountRepository as IAddAccountRepository } from "../../../data/protocols/account/add-account-repository";
import { Account } from "../../../domain/models/Account";
import { AddAccountModel } from "../../../domain/usercases/account/add-account";

export class AddAccountRepository implements IAddAccountRepository {

    private async _exists(login: string): Promise<boolean> {
        const exists = await Account.findOne({
            where: {
                login: login,
            },
        });

        return !!exists;
    }

    async add(accountData: AddAccountModel): Promise<Account> {

        if (await this._exists(accountData.login)) {
            throw new Error('Login already exists');
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

}