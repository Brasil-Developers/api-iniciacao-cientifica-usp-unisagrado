import { Optional } from 'sequelize'
import { Table, Model, Column, DataType, Length, HasMany, ForeignKey } from 'sequelize-typescript'
import { Account } from './Account'
import { Location } from './Location'
import { SpeakerSurgery } from './SpeakerSurgery'

@Table
export class Speaker extends Model {
    @Column
    n_registro_cc!: string

    @Column({
        type: DataType.DATEONLY
    })
    data!: string

    @ForeignKey(() => Location)
    @Column
    local!: number

    @Length({ min: 1, max: 1 })
    @Column
    sexo!: string

    @Column
    condicao_flp!: number

    @Column({
        type: DataType.TEXT
    })
    descricao!: string

    @ForeignKey(() => Account)
    @Column
    criado_por!: number

    @HasMany(() => SpeakerSurgery)
    speakerSurgeries!: SpeakerSurgery[]
    
}