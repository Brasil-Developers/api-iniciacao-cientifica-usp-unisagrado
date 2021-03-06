import { Optional } from 'sequelize'
import { Table, Model, Column, DataType } from 'sequelize-typescript'

@Table
export class Account extends Model {
  @Column
  nome: string

  @Column({
    type: DataType.DATEONLY
  })
  data_nasc: Date

  @Column
  cpf: string

  @Column
  sexo: string

  @Column
  area_atuacao: number

  @Column
  numero_crfa: string

  @Column
  login: string

  @Column
  senha: string

  @Column
  questao1: number

  @Column
  questao1_outro: string

  @Column
  questao2: number

  @Column
  questao2_outro: string
  
  @Column
  ciencia_confirmacao?: boolean

  @Column({
    defaultValue: 1,
  })
  nivel_acesso: number
}