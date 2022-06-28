import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript'
import { Record } from './Record'
import { Task } from './Task'

@Table
export class TaskRecord extends Model {
    @ForeignKey(() => Task)
    @Column({
        type: DataType.INTEGER,
    })
    task!: number

    @ForeignKey(() => Record)
    @Column({
        type: DataType.INTEGER,
    })
    gravacao!: number

    @Column
    marcada?: number
}