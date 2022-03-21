import { Account } from "../../../domain/models/Account";
import { LoginAccountModel } from "../../../domain/usercases/account/login-account";

export interface LoginAccountRepository {
    login(accountData: LoginAccountModel): Promise<Account>
}