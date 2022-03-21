import { AccountModel } from "../../../domain/usercases/account";
import { AccountRepository } from "../../../infra/repositories/account/account-repository";
import { Encrypter } from "../../protocols/encrypter";
import { IRepository } from "../../protocols/repository";


export class DbAddAccount implements IRepository {
    private readonly encrypter:Encrypter;
    private readonly addAccpimtRepository: AccountRepository;
    constructor( encrypter: Encrypter, addAccpimtRepository: AccountRepository) {
        this.encrypter = encrypter
        this.addAccpimtRepository = addAccpimtRepository
    }
    save(stack: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(stack: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(stack: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    find(stack: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    
    async add(accountData: AccountModel): Promise<AccountModel> {
        const hashedPassword = await this.encrypter.encrypt(accountData.password)
        const account = await this.addAccpimtRepository.add(Object.assign({}, accountData, {password: hashedPassword}))
        return new Promise(resolve => resolve(account))
    }
    
}