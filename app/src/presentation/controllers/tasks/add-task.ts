
import { AddTasks } from "../../../domain/usercases/tasks/task";
import { badRequest, ok, serverError } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class AddTaskController implements Controller {
    private readonly taskData: AddTasks;

    constructor(taskData: AddTasks) {
        this.taskData = taskData;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const data = Object.assign(httpRequest.body, {}, {
                criado_por: httpRequest.body.userId,
            });

            const response = await this.taskData.add(data);
            return ok({ data: httpRequest.body });
        } catch (err: any) {
            return serverError(Error(err));
        }
    }
}