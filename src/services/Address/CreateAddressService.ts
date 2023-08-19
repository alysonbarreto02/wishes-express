import { AddressRepository } from "@/repositories/AddressRepository"
import { AttributesCreateAddressService } from "@/types/services/AddressTypes"

export class CreateAddressService {
  public async execute({
    CEP,
    city,
    complement,
    neighborhood,
    number,
    UF,
    road
  }: AttributesCreateAddressService) {
    const address = AddressRepository.create({
      CEP,
      city,
      complement,
      neighborhood,
      number,
      UF,
      road
    })

    const result = AddressRepository.save(address)

    return result
  }
}
