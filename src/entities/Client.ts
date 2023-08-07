import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("clients")
export class Client {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: "timestamp with time zone" })
  created_at: Date

  @Column({ type: "timestamp with time zone" })
  updated_at: Date

  @Column({ type: "timestamp with time zone" })
  deleted_at: Date

  @Column({ type: "text" })
  name: string

  @Column({ type: "text" })
  username: string

  @Column({ type: "text" })
  password: string

  @Column({ type: "varchar", length: 20 })
  phone: string
}
