import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { CheckoutSessionReq } from '../models/checkout-session-req';
import { CommonService } from './common.service';
import { SessionEntity } from '../models/session-entity';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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

  baseUrl: string = "/api/Bookings";

  constructor(private httpClient: HttpClient,
    private commonService: CommonService) {
    console.log(commonService.getIsLogin())
  }
 
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
  checkoutSession(sessionsArray:Product[]):Observable<number>{
    console.log("In Cart Service");
    console.log(sessionsArray)
    let checkoutSessionReq:CheckoutSessionReq = new CheckoutSessionReq(this.commonService.getUsername(), this.commonService.getPassword(), sessionsArray)
    console.log("before http put request");
    return this.httpClient.put<number>(this.baseUrl,checkoutSessionReq , httpOptions).pipe
    (
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = "";

    if (error.error instanceof ErrorEvent) {
      errorMessage = "An unknown error has occurred: " + error.error;
    }
    else {
      errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }
}
