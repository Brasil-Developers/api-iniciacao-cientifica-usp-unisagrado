import { SpeakerSurgery } from "../../models/SpeakerSurgery";

export interface AddSpeakerSurgeryModel {
    tipo_surgery: string
    speaker: number
    idade_ano: number
    idade_mes: number,
    data_surgery: string,
    des_type: string,
    obs_type: string
}

export interface AddSpeakerSurgery {
    add(speakerSurgery: AddSpeakerSurgeryModel): Promise<SpeakerSurgery | Error>
}