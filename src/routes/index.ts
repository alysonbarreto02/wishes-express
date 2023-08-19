import { AddressController } from "@/controllers/AddressController"
import { RestaurantController } from "@/controllers/RestaurantController"

import { Router } from "express"

const routes = Router()

routes.post("/create-restaurant", new RestaurantController().create)
routes.post("/create-address", new AddressController().create)

export default routes
