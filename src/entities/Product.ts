// import {
//   Column,
//   Entity,
//   Generated,
//   JoinColumn,
//   ManyToOne,
//   PrimaryGeneratedColumn
// } from "typeorm"
// import { Enterprise } from "./Enterprise"

// @Entity()
// export class Product {
//   @PrimaryGeneratedColumn()
//   @Generated("uuid")
//   id: string

//   @Column({ type: "timestamp" })
//   created_at: Date

//   @Column({ type: "timestamp" })
//   updated_at: Date

//   @Column({ type: "timestamp" })
//   deleted_at: Date

//   @Column({ type: "text" })
//   name: string

//   @Column({ type: "decimal" })
//   price: number

//   @Column({ type: "text" })
//   description: number

//   @ManyToOne(() => Enterprise, enterprise => enterprise.products)
//   @JoinColumn()
//   enterprise: Enterprise
// }
