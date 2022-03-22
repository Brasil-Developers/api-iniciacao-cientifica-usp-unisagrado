import { Account } from "../../models/Account";

export interface GetAccount {
    get(accountId: number): Promise<Account>
}