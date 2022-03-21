export class GenericError extends Error {
    constructor (msg: string) {
        super(`Erro: ${msg}`)
        this.name = 'GenericError'
    }
}