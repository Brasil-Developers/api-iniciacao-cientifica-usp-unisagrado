import { Account } from "../../../domain/models/Account";
import { AddAccountModel } from "../../../domain/usercases/account/add-account";

export interface AddAccountRepository {
    add( accountData: AddAccountModel ): Promise<Account | Error>
}