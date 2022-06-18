import { Speaker } from "../../../domain/models/Speaker";
import { AddSpeaker, AddSpeakerModel } from "../../../domain/usercases/speaker/add-speaker";
import { SpeakerRepository } from "../../../infra/db/repositories/speaker/speaker-repository";


export class DbAddSpeaker implements AddSpeaker {
    private readonly speakerRepository: SpeakerRepository;

    constructor(speakerRepository: SpeakerRepository) {
        this.speakerRepository = speakerRepository
    }

    async add(speaker: AddSpeakerModel): Promise<Speaker | Error> {

        // Check if speaker already exists
        const speakerExists: boolean = await this.speakerRepository.getByNRegistroCC(speaker.n_registro_cc);

        if (speakerExists === true) {
            return new Error("Speaker already exists");
        }

        const speakerData = await this.speakerRepository.add(speaker);
        return speakerData;
    }
}