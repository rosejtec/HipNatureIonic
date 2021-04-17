import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonService } from './common.service';
import { RetrieveBookingsByCusReq } from '../models/retrieve-bookings-by-cus-req';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MybookingsService {

  selectedBookingToView: RetrieveBookingsByCusReq;
  baseUrl: string = "/api/Bookings";

  constructor(private httpClient: HttpClient,
    private commonService: CommonService) {
    console.log(commonService.getIsLogin())
  }

  retrieveMyBookings(): Observable<RetrieveBookingsByCusReq[]> {
    return this.httpClient.get<RetrieveBookingsByCusReq[]>(this.baseUrl + "/retrieveMyBookings?username=" + this.commonService.getUsername() + "&password=" + this.commonService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }
  retrieveMyPastBookings(): Observable<RetrieveBookingsByCusReq[]> {
    return this.httpClient.get<RetrieveBookingsByCusReq[]>(this.baseUrl + "/retrieveMyPastBookings?username=" + this.commonService.getUsername() + "&password=" + this.commonService.getPassword()).pipe
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
  /*getCreditCards(): Observable<Creditcard[]> {
    return this.httpClient.get<Creditcard[]>(this.baseUrl + "/retrieveCreditCard?username=" + this.commonService.getUsername() + "&password=" + this.commonService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }*/
}
