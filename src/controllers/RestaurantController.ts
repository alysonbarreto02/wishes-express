import { NextFunction, Request, Response } from "express"
import { CreateRestaurantService } from "@/services/Restaurant/CreateRestaurantService"
import { CreateAddressService } from "@/services/Address/CreateAddressService"

export class RestaurantController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        email,
        cpfOrCnpj,
        ownerName,
        password,
        phone,
        wishes,
        CEP,
        city,
        complement,
        neighborhood,
        number,
        road,
        UF
      } = req.body

      const address = await new CreateAddressService().execute({
        CEP,
        city,
        complement,
        neighborhood,
        number,
        road,
        UF
      })

      const result = await new CreateRestaurantService().execute({
        cpfOrCnpj,
        email,
        name: "name",
        ownerName,
        password,
        phone,
        wishes,
        address
      })

      res.status(201).json(result)
    } catch (error) {
      next(error)
    }
  }
}
