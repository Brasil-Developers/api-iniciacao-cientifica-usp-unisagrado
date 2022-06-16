import { Speaker } from "../../models/Speaker";

export interface AddSpeakerSurgeryModel {
    tipoSlug: string
    idade_ano: number
    idade_meses: number
    data: string
}

export interface AddSpeakerSurgery {
    add(speakerSurgery: AddSpeakerSurgeryModel): Promise<Speaker | Error>
}