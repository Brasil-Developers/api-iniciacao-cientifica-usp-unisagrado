
import { DbGetSpeakerSurgery } from "../../../data/usecases/speaker-surgery/db-get-speaker-surgery";
import { SpeakerSurgeryRepository } from "../../../infra/db/repositories/speaker-surgery/speaker-surgery-repository";
import { LogWinstonRepository } from "../../../infra/local/log-repository/log-repository";
import { GetSpeakerSurgeryController } from "../../../presentation/controllers/speaker-surgery/get-speaker-surgery";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decoratos/logs";


export const makeGetSpeakerSurgeryController = (): Controller => {
    const speakerSurgeryRepository = new SpeakerSurgeryRepository();
    const getSpeakerSurgery = new DbGetSpeakerSurgery(speakerSurgeryRepository);
    const getSpeakerSurgeryController = new GetSpeakerSurgeryController(getSpeakerSurgery);
    const logWinstonRepository = new LogWinstonRepository()
    return new LogControllerDecorator(getSpeakerSurgeryController, logWinstonRepository);
}
