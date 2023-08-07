import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("products")
export class Product {
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
  description: string

  @Column({ type: "decimal" })
  price: number

  @Column({ type: "text" })
  quantity: string

  @Column({ type: "text" })
  image: string

  @Column({ type: "text" })
  restaurant_id: string
}
