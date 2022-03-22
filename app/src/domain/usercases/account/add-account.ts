import { Account } from "../../models/Account"


export interface AddAccountModel {
    nome: string,
    data_nasc: string,
    cpf: string,
    sexo: string,
    area_atuacao: string,
    numero_crfa: string,
    login: string,
    senha: string,
    senha_confirmacao: string,
    questao1: string,
    questao1_outro: string,
    questao2: string,
    questao2_outro: string,
    ciencia_confirmacao?: boolean,
}

export interface AddAccount {
    add(account: AddAccountModel): Promise<Account | Error>
}