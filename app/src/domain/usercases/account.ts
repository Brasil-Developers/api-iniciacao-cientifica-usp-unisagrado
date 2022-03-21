

export interface AccountModel {
    name: string,
    email: string,
    password: string
}

export interface Account {
    add(account: AccountModel): Promise<AccountModel>
}