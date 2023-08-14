import { AppDataSource } from "@/config/data-source"
import { Restaurant } from "@/entities"

export const RestaurantRepository = AppDataSource.getRepository(Restaurant)
