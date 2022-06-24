import { SpeakerSurgery } from "../../../domain/models/SpeakerSurgery";
import { GetSpeakerSurgery } from "../../../domain/usercases/speaker-surgery/speaker-surgery";
import { SpeakerSurgeryRepository } from "../../../infra/db/repositories/speaker-surgery/speaker-surgery-repository";

export class DbGetSpeakerSurgery implements GetSpeakerSurgery {
    private readonly speakerSurgeryRepository: SpeakerSurgeryRepository;

    constructor(speakerSurgeryRepository: SpeakerSurgeryRepository) {
        this.speakerSurgeryRepository = speakerSurgeryRepository
    }

    async get(id: number): Promise<SpeakerSurgery[] | null | Error> {
        return await this.speakerSurgeryRepository.get(id);
    }
}