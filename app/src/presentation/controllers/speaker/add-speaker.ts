import { AddSpeaker } from "../../../domain/usercases/speaker/add-speaker";
import { GenericError } from "../../errors/generic-error";
import { MissingParamError } from "../../errors/missing-param-error";
import { badRequest, ok, serverError } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class AddSpeakerController implements Controller {
    private readonly speakerData: AddSpeaker;

    constructor(speakerData: AddSpeaker) {
        this.speakerData = speakerData;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            let data = httpRequest.body;
            data.criado_por = httpRequest.body.userId;

            const requiredFields = ['n_registro_cc', 'data', 'local', 'sexo', 'condicao_flp', 'descricao'];
            for (const field of requiredFields) {
                if (!httpRequest.body[field]) {
                    return badRequest(new MissingParamError(field))
                }
            }
            
            const speakerResult = await this.speakerData.add(data);

            if (speakerResult instanceof Error) {
                return badRequest(new GenericError(speakerResult.message));
            }

            return ok({
                data: speakerResult
            });
        } catch (err: any) {
            return serverError(Error(err));
        }
    }
}