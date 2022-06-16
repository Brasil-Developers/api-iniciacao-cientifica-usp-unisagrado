import { DbGetAllSpeaker } from "../../../data/usecases/speaker/db-get-all-speaker";
import { SpeakerRepository } from "../../../infra/db/repositories/speaker/speaker-repository";
import { LogWinstonRepository } from "../../../infra/local/log-repository/log-repository";
import { GetAllSpeakerController } from "../../../presentation/controllers/speaker/get-all-speaker";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decoratos/logs";

export const makeGetAllSpeakerController= (): Controller => { 
    
    const speakerRepository = new SpeakerRepository();
    const getAllSpeaker = new DbGetAllSpeaker(speakerRepository);
    const getAllSpeakerController = new GetAllSpeakerController(getAllSpeaker);
    const logWinstonRepository = new LogWinstonRepository()
    return new LogControllerDecorator(getAllSpeakerController, logWinstonRepository);
}