import { GetAllSpeaker } from "../../../domain/usercases/speaker/get-all-speaker";
import { ok, serverError } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class GetAllSpeakerController implements Controller {
    private readonly speakerData: GetAllSpeaker;

    constructor(speakerData: GetAllSpeaker) {
        this.speakerData = speakerData;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const data = Object.assign(httpRequest.body, {}, {});
            const speakerResult = await this.speakerData.getAll();

            return ok({ data: speakerResult });
        } catch (err: any) {
            return serverError(Error(err));
        }
    }
}