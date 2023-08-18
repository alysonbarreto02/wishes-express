import { RestaurantRepository } from "@/repositories"

import { NextFunction, Request, Response } from "express"
import { CreateRestaurantService } from "@/services/Restaurant/CreateRestaurantService"

export class RestaurantController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body

      const result = await new CreateRestaurantService().execute({
        cpfOrCnpj: "asd",
        email,
        name: "name",
        ownerName: "ownerName",
        password: "password",
        phone: "6523",
        wishes: 2
      })

      res.status(201).json({ result })
    } catch (error) {
      next(error)
    }
  }
}
