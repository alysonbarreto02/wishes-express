import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm"
import { Restaurant } from "./Restaurant"

@Entity("products")
export class Product {
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
  description: string

  @Column({ type: "decimal" })
  price: number

  @Column({ type: "text" })
  quantity: string

  @Column({ type: "text" })
  image: string

  @Column({ type: "text" })
  restaurant_id: string

  @ManyToOne(() => Restaurant, restaurant => restaurant.restaurant)
  products: string[]
}
