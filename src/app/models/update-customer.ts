import { Customer } from './customer';
export class UpdateCustomer {

    customer: Customer|undefined
    username: string |undefined
    password: string |undefined

    constructor(
      username?:string,
        password?: string,
        customer?: Customer
        
      ) {
        this.password = password;
        this.username = username;
        this.customer=customer;
      }
}
