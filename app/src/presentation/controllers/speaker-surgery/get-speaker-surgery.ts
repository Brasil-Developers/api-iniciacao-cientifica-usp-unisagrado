import { DbGetSpeakerSurgery } from "../../../data/usecases/speaker-surgery/db-get-speaker-surgery";
import { SpeakerSurgery } from "../../../domain/models/SpeakerSurgery";
import { GetSpeakerSurgery } from "../../../domain/usercases/speaker-surgery/speaker-surgery";
import { GenericError } from "../../errors/generic-error";
import { badRequest, ok, serverError } from "../../helpers/http-helper";
import { HttpRequest, HttpResponse } from "../../protocols";
import { Controller } from "../../protocols/controller";

export class GetSpeakerSurgeryController implements Controller {
    private readonly speakerSurgeryData: DbGetSpeakerSurgery;

    constructor(speakerSurgeryData: DbGetSpeakerSurgery) {
        this.speakerSurgeryData = speakerSurgeryData;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { speaker } = httpRequest.params;
            const resSurgery: SpeakerSurgery[] | Error | null = await this.speakerSurgeryData.get(speaker);

            if (resSurgery instanceof Error) {
                return badRequest(new GenericError(resSurgery.message));
            }

            return ok({ data: resSurgery });
        } catch (err: any) {
            return serverError(Error(err));
        }
    }
}