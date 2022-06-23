import { Optional } from 'sequelize'
import { Table, Model, Column, DataType, Length, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { Speaker } from './Speaker'
import { TypeSurgery } from './TypeSurgery'

@Table
export class SpeakerSurgery extends Model {
    @ForeignKey(() => TypeSurgery)
    @Column({
        type: DataType.INTEGER,
    })
    tipo_surgery!: number

    @ForeignKey(() => Speaker)
    @Column({
        type: DataType.INTEGER,
    })
    speaker!: number

    @Column
    idade_ano!: number
    
    @Column
    idade_mes!: number

    @Column({
        type: DataType.DATE,
    })
    data_surgery!: number

    @Column({
        type: DataType.TEXT,
    })
    des_type!: string

    @Column({
        type: DataType.TEXT,
    })
    obs_type!: string

}