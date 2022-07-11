import { DbDelTask } from "../../../data/usecases/task/db-del-task";
import { TaskRepository } from "../../../infra/db/repositories/tasks/tasks-repository";
import { LogWinstonRepository } from "../../../infra/local/log-repository/log-repository";
import { DelTaskController } from "../../../presentation/controllers/tasks/del-task";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decoratos/logs";

export const makeDelTaskController = (): Controller => {
    const tasksRepository = new TaskRepository();
    const delTask = new DbDelTask(tasksRepository);
    const delTaskController = new DelTaskController(delTask);
    const logWinstonRepository = new LogWinstonRepository()
    return new LogControllerDecorator(delTaskController, logWinstonRepository);
}
