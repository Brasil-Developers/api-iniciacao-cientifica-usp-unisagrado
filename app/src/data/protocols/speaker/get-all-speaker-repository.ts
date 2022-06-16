import { Speaker } from "../../../domain/models/Speaker";

export interface GetAllSpeakerRepository {
    getAll(): Promise<Speaker[] | Error>
}