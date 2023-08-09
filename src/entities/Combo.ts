import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("combos")
export class Combo {
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

  @Column({ type: "decimal" })
  price: number

  @Column({ type: "jsonb" })
  products_id: []

  @Column({ type: "uuid" })
  restaurant_id: string
}
