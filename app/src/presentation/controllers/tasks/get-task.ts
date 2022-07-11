import { GetTasks } from "../../../domain/usercases/tasks/task";
import { ok, serverError } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";


export class GetTaskController implements Controller {
    private readonly taskData: GetTasks;

    constructor(taskData: GetTasks) {
        this.taskData = taskData;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { task } = httpRequest.params;
            const response = await this.taskData.get(task);
            return ok({ data: response });
        } catch (err: any) {
            return serverError(Error(err));
        }
    }
}