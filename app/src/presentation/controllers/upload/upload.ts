

import { Controller, HttpRequest, HttpResponse } from '../../protocols';
import { badRequest, ok, serverError } from '../../helpers/http-helper';
import { UploadData, UploadDataModel } from '../../../domain/usercases/upload/upload-data';
import { Document } from '../../../domain/models/Document';
import { GenericError } from '../../errors/generic-error';

export class UploadController implements Controller {
    private readonly uploadData: UploadData;

    constructor(upload: UploadData) {
        this.uploadData = upload;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const data = Object.assign(httpRequest.body, {}, {
                autor: httpRequest.body.autor || 'Sistema',
            })

            const fileUploaded = await this.uploadData.upload(data);
            return ok({ data: fileUploaded });
        } catch (err: any) {
            return serverError(Error(err));
        }
    }
}