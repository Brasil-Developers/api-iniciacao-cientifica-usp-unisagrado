
import { Task } from "../../../domain/models/Task";
import { AddTasks, TasksModel } from "../../../domain/usercases/tasks/task";
import { TaskRepository } from "../../../infra/db/repositories/tasks/tasks-repository";

export class DbAddTask implements AddTasks {
    private readonly tasksRepository: TaskRepository;
    constructor(tasksRepository: TaskRepository) {
        this.tasksRepository = tasksRepository
    }
    async add(task: TasksModel): Promise<Task | Error> {
        return await this.tasksRepository.add(task);
    }
}