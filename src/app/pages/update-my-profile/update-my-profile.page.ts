import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CommonService } from '../../services/common.service';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import { CustomerTypeEnum } from '../../models/customer-type-enum.enum';
import { FileUploadService } from 'src/app/services/file-upload.service';
@Component({
  selector: 'app-update-my-profile',
  templateUrl: './update-my-profile.page.html',
  styleUrls: ['./update-my-profile.page.scss'],
})
export class UpdateMyProfilePage implements OnInit {
  currentCustomer: Customer;
  error: boolean;
  errorMessage: string;
  resultSuccess: boolean;
  resultError: boolean;
  message: string;
  submitted:boolean;
  showImage:boolean;
  useCustomUpload: boolean
  fileName: String | null
  fileToUpload: File | null

  constructor( private fileUploadService: FileUploadService,private router: Router,private commonService: CommonService, private customerService: CustomerService) {
    this.error = false;
    this.resultSuccess = false;
    this.submitted = false;
    this.resultSuccess = false;
    this.currentCustomer = this.commonService.getCurrentCustomer();
    this.showImage=false
    this.useCustomUpload = true
    this.fileName = null
    this.fileToUpload = null
  }


  ngOnInit() {
    console.log(this.commonService.getCurrentCustomer())
    this.currentCustomer = this.commonService.getCurrentCustomer();
    console.log(this.currentCustomer)

    this.refreshImage();
  }

  refreshImage() {
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

  create(updateCustomer: NgForm) {

    this.submitted = true;

    if (updateCustomer.valid) {
      this.customerService.updateCustomer(this.currentCustomer).subscribe(
        response => {
          console.log(response);
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Customer Updated " + this.currentCustomer.customerId + " created successfully";
          this.submitted = false;


          this.customerService.customerLogin(this.commonService.getUsername(), this.commonService.getPassword()).subscribe(
              response => {
                this.currentCustomer = response
                  this.commonService.setCurrentCustomer(this.currentCustomer);

                  console.log(this.commonService.getCurrentCustomer)

                  if (this.currentCustomer != null) {
                      this.commonService.setIsLogin(true);
                      this.commonService.setCurrentCustomer(this.currentCustomer);
                  }

              }
          );
      
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while updating Cust: " + error;

          console.log('**********updating Cust.ts: ' + error);
        }
      );
    }
  }

  handleFileInput(event: any) {
    this.fileToUpload = event.target.files.item(0)

    if (this.fileToUpload != null) {
      this.fileName = this.fileToUpload.name

      this.fileUploadService.uploadFile(this.fileToUpload).subscribe(
        (response) => {
          this.showImage = true
          this.refreshImage()
          console.log(
            '********** FileUploadComponent.ts: File uploaded successfully: ' +
              response.status,
          )
        },
        (error) => {
          this.showImage = true
          console.log('********** FileUploadComponent.ts: ' + error)
        },
      )
    }
  }
  back() {
    this.router.navigate(["/view-my-profile"]);
  }
}
