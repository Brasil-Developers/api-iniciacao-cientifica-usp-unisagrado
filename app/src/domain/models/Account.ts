import { Optional } from 'sequelize'
import { Table, Model, Column } from 'sequelize-typescript'

@Table
export class Account extends Model {
  @Column
  nome: string
  @Column
  data_nasc: string
  @Column
  cpf: string
  @Column
  sexo: string
  @Column
  area_atuacao: string
  @Column
  numero_crfa: string
  @Column
  login: string
  @Column
  senha: string
  @Column
  questao1: string
  @Column
  questao1_outro: string
  @Column
  questao2: string
  @Column
  questao2_outro: string
  @Column
  ciencia_confirmacao?: boolean
}