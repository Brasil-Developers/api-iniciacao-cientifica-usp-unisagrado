import { UploadData, UploadDataModel } from "../../../domain/usercases/upload/upload-data";
import { UploadDataRepository } from "../../protocols/upload/upload-data-repository";
import { Document } from "../../../domain/models/Document";

export class DbUploadData implements UploadData {
    private readonly uploadDataRepository: UploadDataRepository;

    constructor(uploadDataRepository: UploadDataRepository) {
        this.uploadDataRepository = uploadDataRepository
    }

    async upload(arquivo: UploadDataModel): Promise<Document> {
        const saveDb = await this.uploadDataRepository.upload(arquivo);
        return saveDb
    }
}