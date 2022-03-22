

import { Controller, HttpRequest, HttpResponse } from '../../protocols';
import { badRequest, ok, serverError } from '../../helpers/http-helper';
import { UploadData } from '../../../domain/usercases/upload/upload-data';

export class UploadController implements Controller {
    private readonly uploadData: UploadData;

    constructor(upload: UploadData) {
        this.uploadData = upload;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const fileUploaded = await this.uploadData.upload(httpRequest.body);
            return ok({ data: fileUploaded });
        } catch (err: any) {
            return serverError(Error(err));
        }
    }
}