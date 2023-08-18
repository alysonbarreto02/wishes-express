import { AtributtesCreateRestaurantService } from "@/types/services/RestaurantTypes"
import { RestaurantRepository } from "@/repositories"

export class CreateRestaurantService {
  public async execute({
    name,
    wishes,
    ownerName,
    email,
    password,
    cpfOrCnpj,
    phone
  }: AtributtesCreateRestaurantService) {
    RestaurantRepository.create({
      cpf_cnpj: cpfOrCnpj,
      email,
      password,
      name,
      wishes_per_day: wishes,
      name_owner: ownerName,
      phone
    })
  }
}
