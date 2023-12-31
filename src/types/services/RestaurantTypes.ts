import { Address } from "@/entities"

export interface AtributtesCreateRestaurantService {
  name: string
  wishes: number
  ownerName: string
  email: string
  password: string
  cpfOrCnpj: string
  phone: string
  address: Address
}
