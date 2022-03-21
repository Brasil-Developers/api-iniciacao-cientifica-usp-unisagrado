import { LoginAccountRepository as ILoginAccountRepository } from "../../../data/protocols/account/login-account-repository";
import { LoginAccountModel } from "../../../domain/usercases/account/login-account";

import { Account } from "../../../domain/models/Account";

export class LoginAccountRepository implements ILoginAccountRepository {

    async login(accountData: LoginAccountModel): Promise<Account> {

        const user = await Account.findOne({
            where: {
                login: accountData.login,
            },
            attributes: ['id','nome', 'data_nasc', 'cpf', 'sexo', 'area_atuacao', 'numero_crfa', 'login', 'senha', 'questao1', 'questao1_outro', 'questao2', 'questao2_outro', 'ciencia_confirmacao'],
        });

        return user as Account;
    }

}