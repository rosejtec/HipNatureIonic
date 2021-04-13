import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditcardService {

  constructor() { }

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
