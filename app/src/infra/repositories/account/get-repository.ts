import { GetAccountRepository as IGetAccountRepository } from "../../../data/protocols/account/get-account-repository";
import { Account } from "../../../domain/models/Account";

export class GetAccountRepository implements IGetAccountRepository {

    async get(accountId: number): Promise<Account> {

        const user = await Account.findOne({
            where: {
                id: accountId,
            },
            attributes: ['id','nome', 'data_nasc', 'cpf', 'sexo', 'area_atuacao', 'numero_crfa', 'login', 'senha', 'questao1', 'questao1_outro', 'questao2', 'questao2_outro', 'ciencia_confirmacao'],
        });

        return user as Account;
    }

}