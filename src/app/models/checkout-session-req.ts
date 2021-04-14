import {SessionEntity} from '../models/session-entity';
import { Product } from '../services/cart.service';
export class CheckoutSessionReq {

    username: string|undefined;
    password: string|undefined;
    sessionArray: Product[]|undefined

    constructor(username?:string, password?:string, sessionArray?: Product[]){
        this.username = username;
        this.password=password;
        this.sessionArray = sessionArray;
    }
}
