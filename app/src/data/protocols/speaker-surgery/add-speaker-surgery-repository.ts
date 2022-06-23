import { SpeakerSurgery } from "../../../domain/models/SpeakerSurgery";
import { AddSpeakerSurgeryModel } from "../../../domain/usercases/speaker-surgery/speaker-surgery";

export interface AddSpeakerSurgeryRepository {
    add( accountData: AddSpeakerSurgeryModel ): Promise<SpeakerSurgery | Error>
}