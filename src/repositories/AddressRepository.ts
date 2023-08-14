import { AppDataSource } from "@/config/data-source"
import { Address } from "@/entities"

export const AddressRepository = AppDataSource.getRepository(Address)
