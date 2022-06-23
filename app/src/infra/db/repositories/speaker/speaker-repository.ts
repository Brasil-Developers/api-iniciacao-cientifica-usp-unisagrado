import { AddSpeakerRepository as IAddSpeakerRepository } from "../../../../data/protocols/speaker/add-speaker-repository";
import { GetAllSpeakerRepository as IGetAllSpeakerRepository } from "../../../../data/protocols/speaker/get-all-speaker-repository";
import { Speaker } from "../../../../domain/models/Speaker";
import { AddSpeakerModel } from "../../../../domain/usercases/speaker/add-speaker";

export class SpeakerRepository implements IAddSpeakerRepository, IGetAllSpeakerRepository {

    async getByNRegistroCC(n_registro_cc: string): Promise<boolean> {
        const response = await Speaker.findOne({
            where: {
                n_registro_cc: n_registro_cc
            }
        });

        if(response != null) {
            return true;
        }

        return false;
    }

    async add(speakerData: AddSpeakerModel): Promise<Speaker | Error> {

        const response = await Speaker.create({
            n_registro_cc: speakerData.n_registro_cc,
            data: speakerData.data,
            local: speakerData.local,
            sexo: speakerData.sexo,
            condicao_flp: speakerData.condicao_flp,
            descricao: speakerData.descricao,
        });

        return response;
    }

    async getAll(): Promise<Speaker[] | Error> {
        const response = await Speaker.findAll();
        return response;
    }
}