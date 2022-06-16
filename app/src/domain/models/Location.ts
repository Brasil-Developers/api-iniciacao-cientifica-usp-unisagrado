import { Optional } from 'sequelize'
import { Table, Model, Column, DataType, Length } from 'sequelize-typescript'

@Table
export class Location extends Model {
    @Column
    nome!: string
    @Column
    cidade!: string
    @Column
    estado!: string
}