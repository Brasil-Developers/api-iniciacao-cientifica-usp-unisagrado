import { DbAddTask } from "../../../data/usecases/task/db-add-task";
import { TaskRepository } from "../../../infra/db/repositories/tasks/tasks-repository";
import { LogWinstonRepository } from "../../../infra/local/log-repository/log-repository";
import { AddTaskController } from "../../../presentation/controllers/tasks/add-task";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decoratos/logs";

export const makeAddTaskController = (): Controller => {
    const tasksRepository = new TaskRepository();
    const addTask = new DbAddTask(tasksRepository);
    const addTaskController = new AddTaskController(addTask);
    const logWinstonRepository = new LogWinstonRepository()
    return new LogControllerDecorator(addTaskController, logWinstonRepository);
}
