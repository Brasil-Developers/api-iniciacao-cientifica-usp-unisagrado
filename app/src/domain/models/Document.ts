import { Table, Model, Column, ForeignKey, DataType, HasOne } from 'sequelize-typescript'
import { Account } from './Account'

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

}