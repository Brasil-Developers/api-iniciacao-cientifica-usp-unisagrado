import { DelTasks } from "../../../domain/usercases/tasks/task";
import { badRequest, ok, serverError } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class DelTaskController implements Controller {
    private readonly taskData: DelTasks;

    constructor(taskData: DelTasks) {
        this.taskData = taskData;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { task } = httpRequest.params;
            const response = await this.taskData.del(task);
            return ok({ data: response });
        } catch (err: any) {
            return serverError(Error(err));
        }
    }
}