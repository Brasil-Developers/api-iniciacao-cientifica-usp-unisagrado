import { Task } from "../../models/Task";

export interface TasksModel {
    titulo: string,
    prazo_entrega: string,
    descricao: string,
    criado_por: number,
    concluida?: number,
}

export interface AddTasks {
    add(account: TasksModel): Promise<Task | Error>
}

export interface DelTasks {
    del(taskId: number): Promise<boolean | Error>
}

export interface GetTasks {
    get(taskId: number): Promise<Task | null | Error>
}

export interface GetAllTasks {
    getAll(filters?: any): Promise<any | Error>
}