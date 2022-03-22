import { Document } from "../../../domain/models/Document";

export interface UploadDataModel {
    nome: string,
    autor: string,
    descricao: string,
    arquivo: string,
    categoria?: string,
}

export interface UploadData {
    upload(arquivo: UploadDataModel): Promise<Document>
}