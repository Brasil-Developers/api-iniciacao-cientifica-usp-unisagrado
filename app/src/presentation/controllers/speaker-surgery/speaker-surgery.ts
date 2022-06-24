import { AddSpeakerSurgery } from "../../../domain/usercases/speaker-surgery/speaker-surgery";
import { MissingParamError } from "../../errors/missing-param-error";
import { badRequest, ok, serverError } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class AddSpeakerSurgeryController implements Controller {
    private readonly speakerSurgeryData: AddSpeakerSurgery;

    constructor(speakerSurgeryData: AddSpeakerSurgery) {
        this.speakerSurgeryData = speakerSurgeryData;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { speaker } = httpRequest.params;
            const data = Object.assign(httpRequest.body, {}, {
                speaker: speaker
            });

            const requiredFields = ['tipo_surgery', 'idade_ano', 'idade_mes', 'data_surgery', 'des_type'];
            for (const field of requiredFields) {
                if (!httpRequest.body[field]) {
                    return badRequest(new MissingParamError(field))
                }
            }

            const resSurgery = await this.speakerSurgeryData.add(data);
            return ok({ data: resSurgery });
        } catch (err: any) {
            return serverError(Error(err));
        }
    }
}