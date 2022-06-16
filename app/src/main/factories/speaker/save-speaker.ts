
import { DbAddSpeaker } from "../../../data/usecases/speaker/db-add-speaker";
import { SpeakerRepository } from "../../../infra/db/repositories/speaker/speaker-repository";
import { LogWinstonRepository } from "../../../infra/local/log-repository/log-repository";

import { AddSpeakerController } from "../../../presentation/controllers/speaker/add-speaker";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decoratos/logs";


export const makeSaveSpeakerController = (): Controller => {
    const addSpeakerRepository = new SpeakerRepository();
    const addSpeaker = new DbAddSpeaker(addSpeakerRepository);
    const addSpeakerController = new AddSpeakerController(addSpeaker);
    const logWinstonRepository = new LogWinstonRepository()
    return new LogControllerDecorator(addSpeakerController, logWinstonRepository);
}
