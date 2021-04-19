import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RefundReq } from '../models/refund-req';
import { RefundRsq } from '../models/refund-rsq';
import { CommonService } from './common.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class RefundService {

  private refundToView: RefundRsq;

  baseUrl: string = "/api/Refund";

  constructor(private httpClient: HttpClient, private commonService: CommonService) { }

  setRefundToView(value){
    this.refundToView = value
  }

  getRefundToView(){
    return this.refundToView;
  }

  doRefundService(bookingId: number, reason: string): Observable<number> {
    console.log("DoRefundService")
    let refundreq: RefundReq = new RefundReq(this.commonService.getUsername(), this.commonService.getPassword(), bookingId, reason)
    console.log(refundreq)
    return this.httpClient.put<number>(this.baseUrl, refundreq, httpOptions).pipe
      (
        catchError(this.handleError)
      );
  }

  retrieveRefund():Observable<RefundRsq[]>{
    return this.httpClient.get<RefundRsq[]>(this.baseUrl +"/retrieveMyRefunds?username=" + this.commonService.getUsername() + "&password=" + this.commonService.getPassword()).pipe
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
