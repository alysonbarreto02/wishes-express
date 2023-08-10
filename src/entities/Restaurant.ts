import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm"
import { Product } from "@/entities/Product"

@Entity("restaurants")
export class Restaurant {
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

  @OneToMany(() => Product, product => product.restaurant)
  products: Product[]
}
