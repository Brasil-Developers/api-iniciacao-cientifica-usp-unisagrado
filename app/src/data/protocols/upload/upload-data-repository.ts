import { UploadData, UploadDataModel } from "../../../domain/usercases/upload/upload-data";
import { Document } from "../../../domain/models/Document";
export interface UploadDataRepository {
    upload(arquivo: UploadDataModel): Promise<Document>
}