import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Restaurant } from "./Restaurant"

@Entity("adresses")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ type: "timestamp with time zone", default: () => "NOW()" })
  created_at: Date

  @Column({ type: "timestamp with time zone", default: () => "NOW()" })
  updated_at: Date

  @Column({ type: "timestamp with time zone", default: () => "NOW()" })
  deleted_at: Date

  @Column({ type: "numeric" })
  CEP: number

  @Column({ type: "text" })
  road: string

  @Column({ type: "integer" })
  number: number

  @Column({ type: "text" })
  neighborhood: string

  @Column({ type: "text" })
  complement: string

  @Column({ type: "text" })
  city: string

  @Column({ type: "text" })
  UF: string

  @OneToOne(() => Restaurant, restaurant => restaurant.address)
  restaurant: Restaurant
}
