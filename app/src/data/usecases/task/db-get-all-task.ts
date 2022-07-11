
import { GetAllTasks } from "../../../domain/usercases/tasks/task";
import { TaskRepository } from "../../../infra/db/repositories/tasks/tasks-repository";

export class DbGetAllTask implements GetAllTasks {
    private readonly tasksRepository: TaskRepository;
    constructor(tasksRepository: TaskRepository) {
        this.tasksRepository = tasksRepository
    }
    async getAll(filters?: any): Promise<any> {
        return await this.tasksRepository.getAll(filters);
    }
}