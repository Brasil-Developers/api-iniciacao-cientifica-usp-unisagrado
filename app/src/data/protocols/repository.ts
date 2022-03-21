export interface IRepository {
    add( data: any ): Promise<any>
    update( data: any ): Promise<any>
    delete( id: any ): Promise<any>
    find( id: any ): Promise<any>
}