import { SpeakerSurgery } from "../../../domain/models/SpeakerSurgery";
import { AddSpeakerSurgery, AddSpeakerSurgeryModel } from "../../../domain/usercases/speaker-surgery/speaker-surgery";
import { SpeakerSurgeryRepository } from "../../../infra/db/repositories/speaker-surgery/speaker-surgery-repository";

export class DbAddSpeakerSurgery implements AddSpeakerSurgery {
    private readonly speakerSurgeryRepository: SpeakerSurgeryRepository;

    constructor(speakerSurgeryRepository: SpeakerSurgeryRepository) {
        this.speakerSurgeryRepository = speakerSurgeryRepository
    }

    async add(speakerSurgery: AddSpeakerSurgeryModel): Promise<SpeakerSurgery | Error> {
        const response = await this.speakerSurgeryRepository.add(speakerSurgery);
        return response;
    }
}