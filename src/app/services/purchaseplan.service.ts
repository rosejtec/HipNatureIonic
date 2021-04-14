import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CommonService } from './common.service';
import { PurchaseplanReq } from '../models/purchaseplan-req';
import { Plan } from '../models/plan';
import { Purchasedplan } from '../models/purchasedplan';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class PurchaseplanService {
  baseUrl: string = "/api/PurchasePlan";

  constructor(private httpClient: HttpClient,
    private commonService: CommonService) {
    console.log(commonService.getIsLogin())
  }
  makePurchasePlan(ccId:number, planId:Plan):Observable<number>{
    let purchaseplanreq:PurchaseplanReq = new PurchaseplanReq (this.commonService.getUsername(), this.commonService.getPassword(), planId.planId, ccId);
    console.log(purchaseplanreq.password)
    console.log(purchaseplanreq.username)
    return this.httpClient.put<number>(this.baseUrl,purchaseplanreq, httpOptions).pipe
    (
      catchError(this.handleError)
    )
  }
  getCurrentPlan():Observable<Purchasedplan>{
    return this.httpClient.get<Purchasedplan>(this.baseUrl + "/retrieveCurrentPlan?username=" + this.commonService.getUsername() + "&password=" + this.commonService.getPassword()).pipe
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
