import { Customer } from './../models/customer';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

constructor(private http: HttpClient)
	{

	}
  

	getIsLogin(): boolean
	{
		if(sessionStorage.isLogin == "true")
		{
			return true;
		}
		else
		{
			return false;
		}
	}



	setIsLogin(isLogin: boolean): void
	{
		sessionStorage.isLogin = isLogin;
	}

	getData(url: string):  Observable<any> {
        return this.http.get(url).pipe
        (
            catchError(this.handleError)
        );
    }


	getCurrentCustomer(): Customer
	{
		return JSON.parse(sessionStorage.currentCustomer);
	}



	setCurrentCustomer(currentCustomer: Customer | null): void
	{		 
		sessionStorage.currentCustomer = JSON.stringify(currentCustomer);
	}



	getUsername(): string
	{
		return sessionStorage.username;
	}



	setUsername(username: string | undefined): void
	{
		sessionStorage.username = username;
	}
	
	
	
	getPassword(): string
	{
		return sessionStorage.password;
	}



	setPassword(password: string | undefined): void
	{
		sessionStorage.password = password;
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
