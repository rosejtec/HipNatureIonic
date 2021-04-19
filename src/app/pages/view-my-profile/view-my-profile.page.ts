import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms'

import { CommonService } from '../../services/common.service'
import { CustomerService } from '../../services/customer.service'
import { FileUploadService } from '../../services/file-upload.service'

import { Customer } from '../../models/customer'
import { CustomerTypeEnum } from '../../models/customer-type-enum.enum'
import { error } from 'protractor'
@Component({
  selector: 'app-view-my-profile',
  templateUrl: './view-my-profile.page.html',
  styleUrls: ['./view-my-profile.page.scss'],
})
export class ViewMyProfilePage implements OnInit {
  currentCustomer: Customer
  error: boolean
  errorMessage: string
  resultSuccess: boolean
  resultError: boolean
  message: string
  submitted: boolean
  localPath: string = '/assets/data.json'
  profile: Array<any>
  showImage: boolean
  useCustomUpload: boolean
  fileName: String | null
  fileToUpload: File | null

  constructor(
    private fileUploadService: FileUploadService,
    private router: Router,
    private commonService: CommonService,
    private customerService: CustomerService,
  ) {
    this.error = false
    this.resultSuccess = false
    this.submitted = false
    this.resultSuccess = false
    this.resultError = false
    this.loadData()
    this.currentCustomer = this.commonService.getCurrentCustomer()
    this.showImage = false
    this.useCustomUpload = true
    this.fileName = null
    this.fileToUpload = null
  }

  loadData() {
    this.commonService.getData(this.localPath).subscribe((data) => {
      this.profile = data.profile
    })
  }
  ngOnInit() {
    console.log(this.commonService.getCurrentCustomer())
    this.currentCustomer = this.commonService.getCurrentCustomer()
    // this.fileUploadService.getImage().subscribe(res =>{
    //   console.log(res)
    //   this.showImage = true;

    // } ,
    // error => {
    //   this.showImage = false;
    //   console.log('********** FileUploadComponent.ts: ' + error);
    // }
    // );
    let url = 'http://localhost:8080/HipNatureRS/uploadedFiles/' + this.commonService.getCurrentCustomer().email

    this.checkImage(url, (err) => {
      this.showImage = true
      console.log(err)
    })
    console.log(this.showImage)
  }

  checkImage(url, callback) {
    let image = new Image()
    image.src = url
    image.onerror = function (evt) {
      callback(false)
    }
    image.onload = function (evt) {
      callback(true)
    }
  }
  //  getImage(): any  {
  //   let url = "http://localhost:8080/HipNatureRS/uploadedFiles/" + this.commonService.getCurrentCustomer().email;
  //   var request = new XMLHttpRequest();
  // request.open("GET", url, true);
  // request.send();
  // request.onload = function() {
  //   let status = request.status;
  //   if (status == 200) //if(statusText == OK)
  //   {
  //     return true
  //   } else {
  //     return false
  //       }
  // }
  // console.log(url)
  //   return this.httpClient.get<any>(url).pipe
  //   (
  //       catchError(this.handleError)
  //   );
  // }

  create(updateCustomer: NgForm) {
    this.submitted = true

    if (updateCustomer.valid) {
      this.customerService.updateCustomer(this.currentCustomer).subscribe(
        (response) => {
          let customerId: number = response
          console.log(customerId)
          this.resultSuccess = true
          this.resultError = false
          this.message =
            'Customer Updated ' + customerId + ' created successfully'
          this.submitted = false
          updateCustomer.reset()
        },
        (error) => {
          this.resultError = true
          this.resultSuccess = false
          this.message = 'An error has occurred while updating Cust: ' + error

          console.log('**********updating Cust.ts: ' + error)
        },
      )
    }
  }

  handleFileInput(event: any) {
    this.fileToUpload = event.target.files.item(0)

    if (this.fileToUpload != null) {
      this.fileName = this.fileToUpload.name

      this.fileUploadService.uploadFile(this.fileToUpload).subscribe(
        (response) => {
          this.showImage = true
          console.log(
            '********** FileUploadComponent.ts: File uploaded successfully: ' +
              response.status,
          )
        },
        (error) => {
          this.showImage = false
          console.log('********** FileUploadComponent.ts: ' + error)
        },
      )
    }
  }

  editCustomer(event) {
    this.router.navigate(['/update-my-profile/'])
  }

  booking(event) {
    this.router.navigate(['/view-my-bookings/'])
  }
  plan(event) {
    this.router.navigate(['/view-my-credit-cards/'])
  }
}
