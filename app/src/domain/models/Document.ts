import { Optional } from 'sequelize'
import { Table, Model, Column } from 'sequelize-typescript'

@Table
export class Document extends Model {
  @Column
  nome: string
  @Column
  autor: string
  @Column
  descricao: string
  @Column
  arquivo: string
  @Column
  categoria: string
}