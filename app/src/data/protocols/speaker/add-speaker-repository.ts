import { Speaker } from "../../../domain/models/Speaker";
import { AddSpeakerModel } from "../../../domain/usercases/speaker/add-speaker";


export interface AddSpeakerRepository {
    add( accountData: AddSpeakerModel ): Promise<Speaker | Error>
}