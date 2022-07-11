

import { Task } from "../../../domain/models/Task";
import { GetTasks } from "../../../domain/usercases/tasks/task";
import { TaskRepository } from "../../../infra/db/repositories/tasks/tasks-repository";

export class DbGetTask implements GetTasks {
    private readonly tasksRepository: TaskRepository;
    constructor(tasksRepository: TaskRepository) {
        this.tasksRepository = tasksRepository
    }
    async get(taskId: number): Promise<Error | Task | null> {
        return await this.tasksRepository.get(taskId);
    }
}