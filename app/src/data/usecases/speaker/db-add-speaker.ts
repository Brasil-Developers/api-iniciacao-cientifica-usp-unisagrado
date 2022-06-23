import { Speaker } from "../../../domain/models/Speaker";
import { AddSpeaker, AddSpeakerModel } from "../../../domain/usercases/speaker/add-speaker";
import { SpeakerRepository } from "../../../infra/db/repositories/speaker/speaker-repository";


export class DbAddSpeaker implements AddSpeaker {
    private readonly speakerRepository: SpeakerRepository;

    constructor(speakerRepository: SpeakerRepository) {
        this.speakerRepository = speakerRepository
    }

    async add(speaker: AddSpeakerModel): Promise<Speaker | Error> {
        // Check speaker contains fields
        if (speaker.n_registro_cc == null || typeof speaker.n_registro_cc === 'undefined') {
            throw new Error("n_registro_cc not null");
        }

        // Check if speaker already exists
        const speakerExists: boolean = await this.speakerRepository.getByNRegistroCC(speaker.n_registro_cc);

        if (speakerExists === true) {
            throw new Error("Speaker already exists");
        }

        const speakerData = await this.speakerRepository.add(speaker);
        return speakerData;
    }
}