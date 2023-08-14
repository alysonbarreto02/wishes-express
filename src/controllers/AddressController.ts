import { Address } from "@/entities"
import { AddressRepository } from "@/repositories/AddressRepository"
import { Request, Response } from "express"

export class AddressController {
  async create(req: Request, res: Response) {
    try {
      const { CEP, road, number, neighborhood, complement, city, UF } = req.body

      const address = new Address()

      address.CEP = CEP
      address.road = road
      address.number = number
      address.neighborhood = neighborhood
      address.complement = complement
      address.city = city
      address.UF = UF

      const result = AddressRepository.save(address)
      res.status(201).json({ result })
    } catch (e) {
      console.log({ error: e })
      res.status(500).json("Erro na consulta do servidor")
    }
  }
}
