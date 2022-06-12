import { AddSpeaker } from "../../../domain/usercases/speaker/add-speaker";
import { ok, serverError } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class AddSpeakerController implements Controller {
    private readonly speakerData: AddSpeaker;

    constructor(speakerData: AddSpeaker) {
        this.speakerData = speakerData;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const data = Object.assign(httpRequest.body, {}, {});
            const speakerResult = await this.speakerData.add(data);

            return ok({ data: speakerResult });
        } catch (err: any) {
            return serverError(Error(err));
        }
    }
}