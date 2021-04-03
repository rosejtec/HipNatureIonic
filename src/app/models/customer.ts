import { CustomerTypeEnum } from './customer-type-enum.enum'

export class Customer {
  customerId: number | undefined
  customerName: string | undefined
  phone: string | undefined
  customerTypeEnum: CustomerTypeEnum | undefined
  email: string | undefined
  password: string | undefined
  username: string | undefined

  constructor( customerId?: number, customerName?: string, phone?: string,customerTypeEnum?: CustomerTypeEnum, email?: string, password?: string, username?: string) {
    this.customerTypeEnum = customerTypeEnum
    this.customerName = customerName
    this.customerId = customerId
    this.phone = phone
    this.email = email
    this.username = username
    this.password = password
  }
}

