import { Optional } from 'sequelize'
import { Table, Model, Column, DataType, Length, HasMany } from 'sequelize-typescript'
import { Account } from './Account'
import { Record } from './Record'
import { Speaker } from './Speaker'

@Table
export class Location extends Model {
    @Column
    nome!: string
    @Column
    cidade!: string
    @Column
    estado!: string
    @HasMany(() => Speaker)
    speakerSurgeries!: Speaker[]
    @HasMany(() => Account)
    accounts!: Account[]
    @HasMany(() => Record)
    records!: Record[]
}