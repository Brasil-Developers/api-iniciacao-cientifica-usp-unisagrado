import { Optional } from 'sequelize'
import { Table, Model, Column, DataType, Length } from 'sequelize-typescript'

@Table
export class Speaker extends Model {
    @Column
    n_registro_cc: string

    @Column({
        type: DataType.DATEONLY
    })
    data: string

    @Column
    local: number

    @Length({ min: 1, max: 1 })
    @Column
    sexo: string

    @Column
    condicao_flp: number

    @Column({
        type: DataType.TEXT
    })
    descricao: string
}