import { Speaker } from "../../models/Speaker";

export interface AddSpeakerModel {
    n_registro_cc: string
    data: string
    local: number
    sexo: string
    condicao_flp: number
    descricao: string
}

export interface AddSpeaker {
    add(speaker: AddSpeakerModel): Promise<Speaker | Error>
}