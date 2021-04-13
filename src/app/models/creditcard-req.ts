import { Creditcard } from "./creditcard"

export class CreditcardReq {

    creditCard: Creditcard|undefined
    username: string |undefined
    password: string |undefined

    constructor(
      username?:string,
        password?: string,
        creditCard?: Creditcard
        
      ) {
        this.password = password;
        this.username = username;
        this.creditCard=creditCard;
      }
}
