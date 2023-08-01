import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm"

@Entity("enterprises")
export class Enterprise {
  @PrimaryGeneratedColumn()
  @Generated("uuid")
  id: string

  @Column({ type: "timestamp" })
  created_at: Date

  @Column({ type: "timestamp" })
  updated_at: Date

  @Column({ type: "timestamp" })
  deleted_at: Date

  @Column({ type: "text" })
  name: string
}
