import { THIS_EXPR } from '@angular/compiler/src/output/output_ast'

export class Partner {
  PartnerEntityId: string | undefined
  partnerEntityName: string | undefined
  phone: string | undefined
  email: string | undefined
  address: string | undefined
  username: string | undefined
  password: string | undefined
  profilePicString: string | undefined
  images: string[] | undefined
   
  constructor(
    PartnerEntityId?: string,
    partnerEntityName?: string,
    phone?: string,
    email?: string,
    address?: string,
    username?: string,
    password?: string,
    profilePicString?: string,
    images?: string[],
  ) {
    this.partnerEntityName = partnerEntityName
    this.PartnerEntityId = PartnerEntityId
    this.phone = phone
    this.email = email
    this.address = address
    this.username = username
    this.password = password
    this.profilePicString = profilePicString
    this.images = images
  }
}
