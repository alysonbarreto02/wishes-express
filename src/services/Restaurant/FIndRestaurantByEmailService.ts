import { RestaurantRepository } from "@/repositories"

export class FindRestaurantByEmailService {
  async execute({ email }: { email: string }) {
    const result = await RestaurantRepository.findOne({ where: { email } })
    console.log({ result })
    return result
  }
}
