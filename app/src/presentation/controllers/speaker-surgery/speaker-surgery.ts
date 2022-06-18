import { AddSpeakerSurgery } from "../../../domain/usercases/speaker-surgery/speaker-surgery";
import { ok, serverError } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class AddSpeakerSurgeryController implements Controller {
    private readonly speakerData: AddSpeakerSurgery;

    constructor(speakerData: AddSpeakerSurgery) {
        this.speakerData = speakerData;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const data = Object.assign(httpRequest.body, {}, {});
            const resSurgery = await this.speakerData.add(data);
            return ok({ data: resSurgery });
        } catch (err: any) {
            return serverError(Error(err));
        }
    }
}