import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm"

@Entity("combos")
export class Combo {
  @PrimaryGeneratedColumn()
  @Generated("uuid")
  id: string

  @Column({ type: "timestamp" })
  created_at: Date

  @Column({ type: "timestamp" })
  updated_at: Date

  @Column({ type: "timestamp" })
  deleted_at: Date

  @Column({ type: "decimal" })
  price: number
}
