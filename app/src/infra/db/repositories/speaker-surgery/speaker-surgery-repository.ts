import { Speaker } from "../../../../domain/models/Speaker";
import { SpeakerSurgery } from "../../../../domain/models/SpeakerSurgery";
import { AddSpeakerSurgery as IAddSpeakerSurgery, AddSpeakerSurgeryModel, GetSpeakerSurgery as IGetSpeakerSurgery } from "../../../../domain/usercases/speaker-surgery/speaker-surgery";

export class SpeakerSurgeryRepository implements IAddSpeakerSurgery, IGetSpeakerSurgery {

    async get(id: number): Promise<SpeakerSurgery[] | null | Error> {
        return await SpeakerSurgery.findAll({
            attributes:['id', 'idade_ano', 'idade_mes', 'data_surgery', 'des_type', 'obs_type', 'tipo_surgery'],
            where: {
                speaker: id
            },
        });
    }

    async add(speakerSurgery: AddSpeakerSurgeryModel): Promise<SpeakerSurgery | Error> {
        const response = await SpeakerSurgery.create({
            tipo_surgery: speakerSurgery.tipo_surgery,
            speaker: speakerSurgery.speaker,
            idade_ano: speakerSurgery.idade_ano,
            idade_mes: speakerSurgery.idade_mes,
            data_surgery: speakerSurgery.data_surgery,
            des_type: speakerSurgery.des_type,
            obs_type: speakerSurgery.obs_type
        });
        return response;
    }
}