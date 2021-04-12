import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface Product {
  sessionId:number
  venue:string
  startTime:Date
  endTime:Date
  Duration:number
  phone:number
  maxCapacity:number
  status:string
  instructor:string
  credit:number,
  className:string
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }
 
  getCart() {
    return this.cart;
  }
 
  getCartItemCount() {
    return this.cartItemCount;
  }
  addSession(product) {
    let repeat = false;
    for (let p of this.cart) {
      if (p.sessionId === product.sessionId) {
        p.amount += 1;
        repeat= true;
        break;
      }
    }
    if (!repeat) {
      this.cart.push(product);
      this.cartItemCount.next(this.cartItemCount.value + 1);
    }
  }

  removeSession(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.sessionId === product.sessionId) {
        this.cartItemCount.next(this.cartItemCount.value - 1);
        this.cart.splice(index, 1);
      }
    }
  }
}
