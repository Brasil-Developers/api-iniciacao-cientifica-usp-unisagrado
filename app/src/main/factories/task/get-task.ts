
import { DbGetTask } from "../../../data/usecases/task/db-get-task";
import { TaskRepository } from "../../../infra/db/repositories/tasks/tasks-repository";
import { LogWinstonRepository } from "../../../infra/local/log-repository/log-repository";
import { AddTaskController } from "../../../presentation/controllers/tasks/add-task";
import { GetTaskController } from "../../../presentation/controllers/tasks/get-task";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decoratos/logs";

export const makeGetTaskController = (): Controller => {
    const tasksRepository = new TaskRepository();
    const getTask = new DbGetTask(tasksRepository);
    const getTaskController = new GetTaskController(getTask);
    const logWinstonRepository = new LogWinstonRepository()
    return new LogControllerDecorator(getTaskController, logWinstonRepository);
}
