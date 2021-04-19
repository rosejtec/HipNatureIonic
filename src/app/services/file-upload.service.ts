import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonService } from './common.service';

const httpOptions = {
  headers: new HttpHeaders({
     'Content-Type': 'multipart/form-data',
     'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT'
})
};

@Injectable({
  providedIn: 'root'
})
export class FileUploadService
{
  baseUrl: string = "/api/File";

  constructor(private httpClient: HttpClient, private commonService: CommonService)
  {    
  }

  uploadFile(fileToUpload: File | null): Observable<any>
  {
    if(fileToUpload != null)
    {
      let formData: FormData = new FormData();   
      // formData.append('file', fileToUpload, fileToUpload.name);
      formData.append('file', fileToUpload, this.commonService.getCurrentCustomer().email);
      return this.httpClient.post<any>(this.baseUrl + '/upload', formData).pipe
      (
        catchError(this.handleError)
      );
    }
    else
    {
      return new Observable();
    }
  }

  getImage()
  {
    let url = "http://localhost:8080/HipNatureRS/uploadedFiles/" + this.commonService.getCurrentCustomer().email;
    var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.send();
  request.onload = function() {
    let status = request.status;
    if (request.status == 200) //if(statusText == OK)
    {
      return true;
    } else {
       return false;
    }
  }
    // console.log(url)
    //   return this.httpClient.get<any>(url).pipe
    //   (
    //       catchError(this.handleError)
    //   );
  }


  private handleError(error: HttpErrorResponse)
  {
    let errorMessage: string = "";

    if (error.error instanceof ErrorEvent) 
    {		
      errorMessage = "An unknown error has occurred: " + error.error.message;
    } 
    else 
    {		
      errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);		
  }
}
