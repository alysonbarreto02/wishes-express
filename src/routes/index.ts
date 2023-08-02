import { RoomController } from "@/controllers/RoomController"
import { Router } from "express"

const routes = Router()

routes.post("/create-room", new RoomController().create)

export default routes
