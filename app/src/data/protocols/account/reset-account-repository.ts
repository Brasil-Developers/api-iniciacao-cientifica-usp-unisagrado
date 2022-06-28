import { Account } from "../../../domain/models/Account";
import { ResetAccountModel } from "../../../domain/usercases/account/reset-account";

export interface ResetAccountRepository {
    reset(accountData: ResetAccountModel): Promise<number | Error>
}