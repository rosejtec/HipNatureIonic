import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http'
import { CommonService } from './common.service';
import { Observable, throwError } from 'rxjs';
import { TransactionRequest } from '../models/transaction-request';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  baseUrl: string = "/api/TransactionHistory";

  constructor(private httpClient: HttpClient,  private commonService: CommonService) { }

  retrieveTransaction():Observable<TransactionRequest[]>{
    return this.httpClient.get<TransactionRequest[]>(this.baseUrl +"/retrieveMyTransactions?username=" + this.commonService.getUsername() + "&password=" + this.commonService.getPassword()).pipe
    (
      catchError(this.handleError)
    )
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
