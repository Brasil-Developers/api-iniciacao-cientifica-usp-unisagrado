
import { DbAddSpeakerSurgery } from "../../../data/usecases/speaker-surgery/db-speaker-surgery";
import { SpeakerSurgeryRepository } from "../../../infra/db/repositories/speaker-surgery/speaker-surgery-repository";
import { LogWinstonRepository } from "../../../infra/local/log-repository/log-repository";
import { AddSpeakerSurgeryController } from "../../../presentation/controllers/speaker-surgery/speaker-surgery";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decoratos/logs";


export const makeSaveSpeakerSurgeryController = (): Controller => {
    const addSpeakerSurgeryRepository = new SpeakerSurgeryRepository();
    const addSpeakerSurgery = new DbAddSpeakerSurgery(addSpeakerSurgeryRepository);
    const addSpeakerSurgeryController = new AddSpeakerSurgeryController(addSpeakerSurgery);
    const logWinstonRepository = new LogWinstonRepository()
    return new LogControllerDecorator(addSpeakerSurgeryController, logWinstonRepository);
}
