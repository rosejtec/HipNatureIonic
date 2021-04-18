import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonService } from './common.service';
import { CreditPlan } from '../models/credit-plan';
import { PurchaseplanReq } from '../models/purchaseplan-req';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CreditplanService {

  baseUrl: string = "/api/CreditPlan";

  constructor(private httpClient: HttpClient,
    private commonService: CommonService) {
    console.log(commonService.getIsLogin())
  }
  

  retrieveAllPlans(): Observable<CreditPlan[]>
    {
        return this.httpClient.get<CreditPlan[]>(this.baseUrl + "/retrieveAllCreditPlans").pipe
        (
            catchError(this.handleError)
        );
    }
    makePurchaseCreditPlan(ccId:number, planId:CreditPlan):Observable<number>{
      let purchaseplanreq:PurchaseplanReq = new PurchaseplanReq (this.commonService.getUsername(), this.commonService.getPassword(), planId.creditPlanId, ccId);
      return this.httpClient.put<number>(this.baseUrl,purchaseplanreq, httpOptions).pipe
      (
        catchError(this.handleError)
      )
    }

    private handleError(error: HttpErrorResponse)
    {
        let errorMessage: string = "";
        
        if (error.error instanceof ErrorEvent) 
        {       
            errorMessage = "An unknown error has occurred: " + error.error;
        } 
        else 
        {       
            errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error}`;
        }
        
        console.error(errorMessage);
        
        return throwError(errorMessage);        
    }
}
