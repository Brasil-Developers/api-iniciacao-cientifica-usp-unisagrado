export interface IRepository {
    save( stack: string ): Promise<void>
    update( stack: string ): Promise<void>
    delete( stack: string ): Promise<void>
    find( stack: string ): Promise<string>
}