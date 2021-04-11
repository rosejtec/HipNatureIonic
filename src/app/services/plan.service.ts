import { Injectable } from '@angular/core'
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { CommonService } from './common.service'
import { Plan } from '../models/plan'

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  baseUrl: string = '/api/Plan'

  constructor(
    private httpClient: HttpClient,
    private commonService: CommonService,
  ) {
    console.log(commonService.getIsLogin())
  }

  retrieveAllPlans(): Observable<Plan[]>
    {
        return this.httpClient.get<Plan[]>(this.baseUrl + "/retrieveAllPlans").pipe
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
