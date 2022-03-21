import { IRepository } from "../../../data/repository/repository";

export class AccountRepository implements IRepository {
    save(stack: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(stack: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(stack: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    find(stack: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
}