import { Table, Model, Column, ForeignKey, DataType, HasOne, HasMany } from 'sequelize-typescript'
import { Account } from './Account'
import { Record } from './Record'

@Table
export class Document extends Model {
  @Column
  nome!: string

  @ForeignKey(() => Account)
  @Column({
    type: DataType.INTEGER
  })
  criado_por!: number
  @Column
  descricao!: string
  @Column
  arquivo!: string
  @Column
  categoria!: string
  @HasMany(() => Record)
  records?: Record[]
}