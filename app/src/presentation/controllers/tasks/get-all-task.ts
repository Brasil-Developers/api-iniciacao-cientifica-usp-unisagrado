import { GetAllTasks } from "../../../domain/usercases/tasks/task";
import { ok, serverError } from "../../helpers/http-helper";
import { getPagination, getPagingData } from "../../helpers/pagination";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";


export class GetAllTaskController implements Controller {
    private readonly taskData: GetAllTasks;

    constructor(taskData: GetAllTasks) {
        this.taskData = taskData;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {

            const { limit, offset } = getPagination({
                page: httpRequest?.query?.page,
                size: httpRequest?.query?.size
            })

            const data = Object.assign(httpRequest.params, {}, {
                criado_por: httpRequest.body.userId,
                limit: limit,
                offset: offset,
                order: httpRequest?.query?.field != null ? [[
                    httpRequest?.query?.field,
                    httpRequest?.query?.order == 'descend' ? 'DESC' : 'ASC'
                ]] : null
            });

            console.log(data);

            const response = await this.taskData.getAll(data);

            return ok({
                data: getPagingData({
                    data: response,
                    limit: limit,
                    page: data.page
                })
            });
        } catch (err: any) {

            console.log(err);
            return serverError(Error(err));
        }
    }
}