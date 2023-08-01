import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("Teste")
export class Teste {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: "text" })
  teste: string

  @Column({ type: "boolean" })
  verdadeiro: boolean

  @Column({ type: "boolean" })
  verdadeir2o: boolean
}
