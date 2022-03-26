import { Account } from "../../models/Account"


export interface LoginAccountModel {
    login: string,
    senha: string,
}

export interface LoginAccount {
    login(account: LoginAccountModel): Promise<Account | Error>
}