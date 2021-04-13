import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Creditcard } from '../models/creditcard';
import { CreditcardReq } from '../models/creditcard-req';


import { CommonService } from './common.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CreditcardService {

  baseUrl: string = "/api/CreditCard";

  constructor(private httpClient: HttpClient,
    private commonService: CommonService)
{    
console.log(commonService.getIsLogin())
}


  addNewCreditCard(newCreditCard:Creditcard): Observable<number>{
    let creditcardreq: CreditcardReq = new CreditcardReq(this.commonService.getUsername(), this.commonService.getPassword(),newCreditCard )
    return this.httpClient.put<number>(this.baseUrl, creditcardreq, httpOptions).pipe
    (
        catchError(this.handleError)
    );
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
