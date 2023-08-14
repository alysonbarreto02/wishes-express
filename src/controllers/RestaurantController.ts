import { RestaurantRepository } from "@/repositories"
import { Restaurant } from "@/entities"

import { Request, Response } from "express"
export class RestaurantController {
  async create(req: Request, res: Response) {
    const { name, wishes, ownerName, email, password, cpfOrCnpj } = req.body

    try {
      const restaurant = new Restaurant()

      restaurant.name = name
      restaurant.wishes_per_day = wishes
      restaurant.name_owner = ownerName
      restaurant.email = email
      restaurant.password = password
      restaurant.cpf_cnpj = cpfOrCnpj

      const result = await RestaurantRepository.save(restaurant)

      res.status(201).json({ result })
    } catch (error) {
      console.log(error)
      res.status(500).json("Erro na consulta do servidor")
    }
  }

  async list(_: Request, res: Response) {
    try {
      const result = await RestaurantRepository.find()

      res.status(200).json({ result })
    } catch (error) {
      console.log(error)
      res.status(500).json("Erro no servidor.")
    }
  }
}
