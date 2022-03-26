import { Account } from "../../../domain/models/Account";
import { GetAccount } from "../../../domain/usercases/account/get-account";

export interface GetAccountRepository {
    get( accountId: number ): Promise<Account | Error>
}