import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("clients")
export class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ type: "timestamp with time zone", default: () => "NOW()" })
  created_at: Date

  @Column({ type: "timestamp with time zone", default: () => "NOW()" })
  updated_at: Date

  @Column({ type: "timestamp with time zone", default: () => "NOW()" })
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
