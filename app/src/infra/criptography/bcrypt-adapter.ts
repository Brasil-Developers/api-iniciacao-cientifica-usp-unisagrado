import bcrypt from 'bcryptjs'
import { Encrypter } from "../../data/protocols/encrypter";


export class BcryptAdapter implements Encrypter {
    private readonly salt:number

    constructor (salt: number) {
        this.salt = salt
    }
    
    async encrypt(value: string): Promise<string> {
        const hash = bcrypt.hashSync(value, this.salt)
        return hash;
    }

    async compare(value: string, hash: string): Promise<boolean> {
        const isValid = bcrypt.compareSync(value, hash)
        return isValid
    }
}