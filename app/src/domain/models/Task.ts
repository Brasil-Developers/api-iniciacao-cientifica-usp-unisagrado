import { Table, Model, Column, DataType, ForeignKey, HasMany } from 'sequelize-typescript'
import { Account } from './Account'
import { TaskRecord } from './TaskRecord'

@Table
export class Task extends Model {
    @Column
    titulo!: string

    @Column({
        type: DataType.DATE,
    })
    prazo_entrega!: string

    @Column({
        type: DataType.TEXT,
    })
    descricao!: string

    @ForeignKey(() => Account)
    @Column
    criado_por!: number

    @Column({
        type: DataType.INTEGER,
    })
    concluida?: number

    @HasMany(() => TaskRecord)
    records!: TaskRecord[]
}