import { RestaurantController } from "@/controllers/RestaurantController"
import { Router } from "express"

const routes = Router()

routes.post("/create-restaurant", new RestaurantController().create)
routes.get("/list-restaurants", new RestaurantController().list)

export default routes
