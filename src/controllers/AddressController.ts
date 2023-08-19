import { NextFunction, Request, Response } from "express"

import { CreateAddressService } from "@/services/Address/CreateAddressService"

export class AddressController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { CEP, road, number, neighborhood, complement, city, UF } = req.body
      const result = await new CreateAddressService().execute({
        CEP,
        road,
        number,
        neighborhood,
        complement,
        city,
        UF
      })

      res.status(201).json({ result })
    } catch (e) {
      next(e)
    }
  }
}
