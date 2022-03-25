import { DbUploadData } from "../../../data/usecases/upload/db-upload-data";
import { LogWinstonRepository } from "../../../infra/local/log-repository/log-repository";
import { UploadDataRepository } from "../../../infra/db/repositories/upload/upload-repository";
import { UploadController } from "../../../presentation/controllers/upload/upload";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decoratos/logs";

export const makeUploadController = (): Controller => {
    const uploadDataRepository = new UploadDataRepository();
    const dbUploadData = new DbUploadData(uploadDataRepository);
    const uploadController = new UploadController(dbUploadData);
    const logWinstonRepository = new LogWinstonRepository()
    return new LogControllerDecorator(uploadController, logWinstonRepository);
}
