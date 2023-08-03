import { Room } from "@/entities"
import { RoomRepository } from "@/repositories"
import { Request, Response } from "express"

export class RoomController {
  async create(req: Request, res: Response) {
    const { name, description } = req.body

    try {
      const room = new Room()
      room.name = name
      room.description = description

      const result = await RoomRepository.save(room)

      res.status(201).json({ result })
    } catch (error) {
      console.log(error)
      res.status(500).json("Erro na consulta do servidor")
    }
  }

  async list(_: Request, res: Response) {
    try {
      const result = await RoomRepository.find()

      res.status(200).json({ result })
    } catch (error) {
      console.log(error)
      res.status(500).json("Erro no servidor.")
    }
  }
}
