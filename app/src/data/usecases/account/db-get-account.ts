import { Account } from "../../../domain/models/Account";
import { GetAccount } from "../../../domain/usercases/account/get-account";
import { GetAccountRepository } from "../../protocols/account/get-account-repository";

export class DbGetAccount implements GetAccount {
    private readonly addAccpimtRepository: GetAccountRepository;

    constructor(addAccpimtRepository: GetAccountRepository) {
        this.addAccpimtRepository = addAccpimtRepository
    }

    async get(accountId: number): Promise<Account> {
        const account = await this.addAccpimtRepository.get(accountId)
        return new Promise(resolve => resolve(account))
    }
}