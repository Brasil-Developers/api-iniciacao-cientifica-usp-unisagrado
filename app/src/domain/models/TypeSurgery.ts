import { Optional } from 'sequelize'
import { Table, Model, Column, DataType, Length } from 'sequelize-typescript'

@Table
export class TypeSurgery extends Model {
    @Column
    titulo!: string

    @Column({
        type: DataType.STRING,
    })
    tipoSlug!: string
}