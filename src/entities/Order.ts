import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: "timestamp with time zone" })
  created_at: Date

  @Column({ type: "timestamp with time zone" })
  updated_at: Date

  @Column({ type: "timestamp with time zone" })
  deleted_at: Date

  @Column({ type: "text" })
  client_id: string

  @Column({ type: "text" })
  restaurant_id: string

  @Column({ type: "decimal" })
  total_value: number

  @Column({ type: "text" })
  time_delivery: string
  @Column({ type: "text" })
  address_id: string
}
