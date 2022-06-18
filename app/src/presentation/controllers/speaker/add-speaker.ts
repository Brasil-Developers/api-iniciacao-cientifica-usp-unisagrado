import { Speaker } from "../../../domain/models/Speaker";
import { SpeakerSurgery } from "../../../domain/models/SpeakerSurgery";
import { AddSpeakerSurgery } from "../../../domain/usercases/speaker-surgery/speaker-surgery";
import { AddSpeaker } from "../../../domain/usercases/speaker/add-speaker";
import { ok, serverError } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class AddSpeakerController implements Controller {
    private readonly speakerData: AddSpeaker;
    private readonly speakerSurgeryData: AddSpeakerSurgery;

    constructor(speakerData: AddSpeaker, speakerSurgeryData: AddSpeakerSurgery) {
        this.speakerData = speakerData;
        this.speakerSurgeryData = speakerSurgeryData;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            let data = httpRequest.body;
            data.criado_por = httpRequest.body.userId;

            const speakerResult = await this.speakerData.add(data);

            if (speakerResult instanceof Error) {
                return serverError(speakerResult);
            }

            return ok({
                data: speakerResult
            });
        } catch (err: any) {
            return serverError(Error(err));
        }
    }
}