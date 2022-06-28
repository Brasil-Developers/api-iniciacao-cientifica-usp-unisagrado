import { ResetAccount, ResetAccountModel } from "../../../domain/usercases/account/reset-account";
import { ResetAccountRepository } from "../../protocols/account/reset-account-repository";
import { Encrypter } from "../../protocols/encrypter";
export class DbResetAccount implements ResetAccount {
    private readonly encrypter: Encrypter;
    private readonly accountRepository: ResetAccountRepository;

    constructor(encrypter: Encrypter, accountRepository: ResetAccountRepository) {
        this.encrypter = encrypter
        this.accountRepository = accountRepository
    }

    async reset(account: ResetAccountModel): Promise<number | Error> {
        const hashedPassword = await this.encrypter.encrypt(account.senha)
        const response = await this.accountRepository.reset(Object.assign({}, account, { senha: hashedPassword }))
        return new Promise(resolve => resolve(response))
    }
}