import { UploadDataRepository as IUploadDataRepository } from "../../../../data/protocols/upload/upload-data-repository";
import { Document } from "../../../../domain/models/Document";
import { UploadDataModel } from "../../../../domain/usercases/upload/upload-data";

export class UploadDataRepository implements IUploadDataRepository {
    async upload(arquivo: UploadDataModel): Promise<Document> {
        return await Document.create({
            nome: arquivo.nome,
            autor: arquivo.autor,
            descricao: arquivo.descricao,
            arquivo: arquivo.arquivo,
            categoria: arquivo.categoria,
        });
    }
    
}