import { Account } from "../../../domain/models/Account";
import { AddAccount, AddAccountModel } from "../../../domain/usercases/account/add-account";
import { AddAccountRepository } from "../../protocols/account/add-account-repository";
import { Encrypter } from "../../protocols/encrypter";

export class DbAddAccount implements AddAccount {
    private readonly encrypter:Encrypter;
    private readonly addAccpimtRepository:AddAccountRepository;

    constructor( encrypter: Encrypter, addAccpimtRepository: AddAccountRepository) {
        this.encrypter = encrypter
        this.addAccpimtRepository = addAccpimtRepository
    }

    async add(accountData: AddAccountModel): Promise<Account | Error> {
        const hashedPassword = await this.encrypter.encrypt(accountData.senha)
        const account = await this.addAccpimtRepository.add(Object.assign({}, accountData, {senha: hashedPassword}))
        return new Promise(resolve => resolve(account))
    }
}