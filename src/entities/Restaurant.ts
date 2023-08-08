import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("restaurants")
export class Restaurant {
  @Column({ type: "uuid", default: "uuid_generate_v4()" })
  id: number

  @Column({ type: "timestamp with time zone", default: () => "NOW()" })
  created_at: Date

  @Column({ type: "timestamp with time zone", default: () => "NOW()" })
  updated_at: Date

  @Column({ type: "timestamp with time zone", default: () => "NOW()" })
  deleted_at: Date

  @Column({ type: "text" })
  name: string

  @Column({ type: "text" })
  email: string

  @Column({ type: "text" })
  password: string

  @Column({ type: "integer" })
  wishes_per_day: number

  @Column({ type: "boolean" })
  have_pc: boolean

  @Column({ type: "varchar", length: 20 })
  owner_phone: string

  @Column({ type: "text" })
  owner_email: string

  @Column({ type: "text" })
  name_owner: string
}
