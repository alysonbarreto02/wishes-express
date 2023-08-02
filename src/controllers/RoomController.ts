import { Request, Response } from "express"

export class RoomController {
  async create(req: Request, res: Response) {
    const { name } = req.body

    res.json({ name })
  }
}
