
export interface ResetAccountModel {
    login: string,
    senha: string,
}

export interface ResetAccount {
    reset(account: ResetAccountModel): Promise<number| Error>
}