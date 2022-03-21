import { ILogErrorRepository } from "../../data/protocols/log-error-repository"
import { Controller, HttpRequest, HttpResponse } from "../../presentation/protocols"

export class LogControllerDecorator implements Controller {
    private readonly controller: Controller
    private readonly ILogErrorRepository: ILogErrorRepository

    constructor(controller: Controller, ILogErrorRepository: ILogErrorRepository) {
        this.controller = controller
        this.ILogErrorRepository = ILogErrorRepository
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const httpResponse = await this.controller.handle(httpRequest)
        if (httpResponse.statusCode === 500) {
            await this.ILogErrorRepository.logError(httpResponse.body.stack)
        }

        return httpResponse
    }
}
