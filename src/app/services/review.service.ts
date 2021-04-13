import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { CreateReviewReq} from '../models/create-review-req';

import { CommonService } from './common.service'
import { Review } from '../models/review';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  baseUrl: string = '/api/Review'

  constructor(
    private httpClient: HttpClient,
    private commonService: CommonService,
  ) {
    console.log(commonService.getIsLogin())
  }

  getAllReviewsByClassId(classId: number): Observable<Review[]>
  {
    return this.httpClient.get<Review[]>(this.baseUrl + "/retrieveReviewsByClassId/" + classId).pipe
    (
      catchError(this.handleError)
    );
  }
  createNewReview(newReview: Review, classId:number): Observable<number>
  {		
    console.log(newReview)
    let createReviewReq: CreateReviewReq = new CreateReviewReq(this.commonService.getUsername(), this.commonService.getPassword(), newReview.reviewRating,newReview.description,classId);
    
    console.log(createReviewReq)
    return this.httpClient.put<number>(this.baseUrl, createReviewReq, httpOptions).pipe
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
