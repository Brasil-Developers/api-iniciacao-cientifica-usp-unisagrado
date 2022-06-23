import { Optional } from 'sequelize'
import { Table, Model, Column, DataType, Length, HasMany } from 'sequelize-typescript'
import { SpeakerSurgery } from './SpeakerSurgery'

@Table
export class TypeSurgery extends Model {
    @Column
    titulo!: string

    @Column({
        type: DataType.STRING,
    })
    tipoSlug!: string

    @HasMany(() => SpeakerSurgery)
    speakerSurgeries!: SpeakerSurgery[]
}