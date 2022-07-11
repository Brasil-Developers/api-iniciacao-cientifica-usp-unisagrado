import { Sequelize } from "sequelize-typescript";
import { Task } from "../../../../domain/models/Task";
import { AddTasks as IAddTasks, TasksModel, DelTasks as IDelTasks, GetAllTasks as IGetAllTasks, GetTasks as IGetTasks } from "../../../../domain/usercases/tasks/task";

export class TaskRepository implements IAddTasks, IDelTasks, IGetAllTasks, IGetTasks {
    async get(taskId: number): Promise<Task | null | Error> {
        return await Task.findOne({
            where: {
                id: taskId
            }
        });
    }
    async getAll(filters?: any): Promise<any | Error> {
        const query = await Task.findAndCountAll({
            offset: filters?.offset ?? 0,
            limit: filters?.limit ?? 10,
            order: filters.order ?? [['id', 'ASC']],
        });

        return query;
    }
    async del(taskId: number): Promise<boolean | Error> {
        const query: number = await Task.destroy(
            {
                where: {
                    id: taskId
                }
            }
        );
        if (query == 1)
            return true;
        return false;
    }

    async add(task: TasksModel): Promise<Task | Error> {
        return await Task.create({
            titulo: task.titulo,
            prazo_entrega: task.prazo_entrega,
            descricao: task.descricao,
            criado_por: task.criado_por
        });
    }

}