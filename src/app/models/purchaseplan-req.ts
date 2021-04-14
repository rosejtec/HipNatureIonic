import { Plan } from "./plan";

export class PurchaseplanReq {
    
    planId:number|undefined
    username: string |undefined
    password: string |undefined
    ccId: number|undefined

    constructor(
        username?:string,
        password?: string,
        planId?:number,
        ccId?: number
        
        ) {
          this.password = password;
          this.username = username;
          this.planId=planId;
          this.ccId = ccId;
        }

}
