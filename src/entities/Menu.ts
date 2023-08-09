import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("menu")
export class Menu {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ type: "timestamp with time zone", default: () => "NOW()" })
  created_at: Date

  @Column({ type: "timestamp with time zone", default: () => "NOW()" })
  updated_at: Date

  @Column({ type: "timestamp with time zone", default: () => "NOW()" })
  deleted_at: Date

  @Column({ type: "text" })
  restaurant_id: string

  @Column({ type: "text" })
  sessão: string

  @Column({ type: "text" })
  product_id: string

  @Column({ type: "text" })
  combo_id: string
}
