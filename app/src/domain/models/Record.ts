import { Table, Model, Column, DataType, ForeignKey, HasMany } from 'sequelize-typescript'
import { Location } from './Location'
import { Account } from './Account'
import { Document } from './Document'
import { Speaker } from './Speaker'
import { TaskRecord } from './TaskRecord'

@Table
export class Record extends Model {
    @ForeignKey(() => Document)
    @Column({
        type: DataType.INTEGER,
    })
    document!: number

    @ForeignKey(() => Speaker)
    @Column({
        type: DataType.INTEGER,
    })
    speaker!: number

    @Column({
        type: DataType.DATE,
    })
    data!: string

    @Column
    equipamento_utilizado!: string

    @Column
    idade_ano!: number

    @Column
    idade_mes!: number

    @ForeignKey(() => Location)
    @Column({
        type: DataType.INTEGER,
    })
    location?: Location

    @ForeignKey(() => Account)
    @Column
    criado_por!: number
    
    @HasMany(() => TaskRecord)
    taskRecord!: TaskRecord[]
}