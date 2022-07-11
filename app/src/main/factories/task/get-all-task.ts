
import { DbGetAllTask } from "../../../data/usecases/task/db-get-all-task";
import { TaskRepository } from "../../../infra/db/repositories/tasks/tasks-repository";
import { LogWinstonRepository } from "../../../infra/local/log-repository/log-repository";
import { GetAllTaskController } from "../../../presentation/controllers/tasks/get-all-task";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decoratos/logs";

export const makeGetAllTaskController = (): Controller => {
    const tasksRepository = new TaskRepository();
    const getAllTask = new DbGetAllTask(tasksRepository);
    const getAllTaskController = new GetAllTaskController(getAllTask);
    const logWinstonRepository = new LogWinstonRepository()
    return new LogControllerDecorator(getAllTaskController, logWinstonRepository);
}
