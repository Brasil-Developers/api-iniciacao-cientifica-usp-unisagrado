

import { DelTasks } from "../../../domain/usercases/tasks/task";
import { TaskRepository } from "../../../infra/db/repositories/tasks/tasks-repository";

export class DbDelTask implements DelTasks {
    private readonly tasksRepository: TaskRepository;
    constructor(tasksRepository: TaskRepository) {
        this.tasksRepository = tasksRepository
    }
    async del(taskId: number): Promise<boolean | Error> {
        return await this.tasksRepository.del(taskId);
    }
}