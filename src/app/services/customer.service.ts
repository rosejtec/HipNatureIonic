import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CommonService } from './common.service';
import { Customer } from '../models/customer';
import {CreateNewCustomerReq} from '../models/create-new-customer-req';
import { UpdateCustomer } from '../models/update-customer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

    baseUrl: string = "/api/Customer";



    constructor(private httpClient: HttpClient,
                private commonService: CommonService)
    {    
        console.log(commonService.getIsLogin())
    }



    customerLogin(username: string | undefined, password: string | undefined): Observable<Customer>
    {
        return this.httpClient.get<Customer>(this.baseUrl + "/customerLogin?username=" + username + "&password=" + password).pipe
        (
            catchError(this.handleError)
        );
    }

    createNewCustomer(newCustomer:Customer): Observable<number>{
        console.log('customer service');
        let createNewCustomerReq:CreateNewCustomerReq = new CreateNewCustomerReq(newCustomer);
        console.log('customer service2');
        console.log(this.baseUrl);
        return this.httpClient.put<number>(this.baseUrl, newCustomer, httpOptions).pipe
        (
            catchError(this.handleError)
        );
    }

    updateCustomer(updateCustomer:Customer):  Observable<any>{
        let updateCustomerReq: UpdateCustomer = new UpdateCustomer(this.commonService.getUsername(), this.commonService.getPassword(), updateCustomer);
      
      return this.httpClient.post<any>(this.baseUrl, updateCustomerReq, httpOptions).pipe
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

