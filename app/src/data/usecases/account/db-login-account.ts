import { Account } from "../../../domain/models/Account";
import { LoginAccount, LoginAccountModel } from "../../../domain/usercases/account/login-account";
import { GenericError } from "../../../presentation/errors/generic-error";
import { LoginAccountRepository } from "../../protocols/account/login-account-repository";
import { Encrypter } from "../../protocols/encrypter";

export class DbLoginAccount implements LoginAccount {
    private readonly encrypter: Encrypter;
    private readonly loginAccpimtRepository: LoginAccountRepository;

    constructor(encrypter: Encrypter, loginAccpimtRepository: LoginAccountRepository) {
        this.encrypter = encrypter
        this.loginAccpimtRepository = loginAccpimtRepository
    }

    async login(accountData: LoginAccountModel): Promise<Account | Error> {

        const findAccount: Account | Error = await this.loginAccpimtRepository.login(accountData)

        if (findAccount instanceof Account) {
            let validate = await this.encrypter.compare(accountData.senha, findAccount.getDataValue('senha'));

            if (!validate) {
                return new GenericError('Invalid password')
            }
        }
        return new Promise(resolve => resolve(findAccount))
    }
}