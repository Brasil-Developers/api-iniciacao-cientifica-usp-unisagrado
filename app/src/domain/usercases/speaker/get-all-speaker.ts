import { Speaker } from "../../models/Speaker";

export interface GetAllSpeakerModel {
    n_registro_cc: string
    data: string
    local: number
    sexo: string
    condicao_flp: number
    descricao: string
}

export interface GetAllSpeaker {
    getAll(): Promise<Speaker[] | Error>
}