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
@Injectable({
  providedIn: 'root'
})
export class ClassService {

  baseUrl: string = '/api/Class'

  constructor(
    private httpClient: HttpClient,
    private commonService: CommonService,
  ) {
    console.log(commonService.getIsLogin())
  }

  retrieveAllClasses(): Observable<Class[]>
    {
        return this.httpClient.get<Class[]>(this.baseUrl + "/retrieveAllClasses").pipe
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
