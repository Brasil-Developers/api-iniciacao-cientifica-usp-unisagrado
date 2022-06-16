import { Speaker } from "../../../domain/models/Speaker";
import { GetAllSpeakerModel, GetAllSpeaker } from "../../../domain/usercases/speaker/get-all-speaker";

import { SpeakerRepository } from "../../../infra/db/repositories/speaker/speaker-repository";


export class DbGetAllSpeaker implements GetAllSpeaker {
    private readonly speakerRepository: SpeakerRepository;

    constructor(speakerRepository: SpeakerRepository) {
        this.speakerRepository = speakerRepository
    }

    async getAll(): Promise<Speaker[] | Error> {
        return await this.speakerRepository.getAll();   
    }
}