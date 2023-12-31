import { AtributtesCreateRestaurantService } from "@/types/services/RestaurantTypes"
import { RestaurantRepository } from "@/repositories"
import { FindRestaurantByEmailService } from "@/services/Restaurant/FIndRestaurantByEmailService"
import { HttpException } from "@/errors/HttpException"

export class CreateRestaurantService {
  public async execute({
    name,
    wishes,
    ownerName,
    email,
    password,
    cpfOrCnpj,
    phone,
    address
  }: AtributtesCreateRestaurantService) {
    const foundRestaurant = await new FindRestaurantByEmailService().execute({
      email
    })

    if (foundRestaurant?.id) {
      throw new HttpException({
        message: "Alredy exists a restaurant with this same name",
        statusCode: 409
      })
    }

    const restaurant = RestaurantRepository.create({
      cpf_cnpj: cpfOrCnpj,
      email,
      password,
      name,
      wishes_per_day: wishes,
      name_owner: ownerName,
      phone,
      address
    })

    const result = RestaurantRepository.save(restaurant)

    return result
  }
}
