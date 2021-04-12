import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { CommonService } from './common.service'
import { Class } from '../models/class'
import {SessionEntity} from '../models/session-entity'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class SessionentityService {

  
  baseUrl: string = '/api/Sessions'

  constructor(private httpClient:HttpClient) { }
  
  getSessionsList(classId: number): Observable<SessionEntity[]> {
    console.log("getSessionsList method")
    return this.httpClient.get<SessionEntity[]>(this.baseUrl + "/retrieveSessionsByClassId/" + classId).pipe(
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
