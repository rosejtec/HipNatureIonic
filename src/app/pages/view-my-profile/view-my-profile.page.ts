import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CommonService } from '../../services/common.service';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import { CustomerTypeEnum } from '../../models/customer-type-enum.enum';
@Component({
  selector: 'app-view-my-profile',
  templateUrl: './view-my-profile.page.html',
  styleUrls: ['./view-my-profile.page.scss'],
})
export class ViewMyProfilePage implements OnInit {

  currentCustomer: Customer;
  error: boolean;
  errorMessage: string;
  resultSuccess: boolean;
  resultError: boolean;
  message: string;
  submitted:boolean;
  localPath: string = '/assets/data.json';
  profile: Array<any>;
  comments: Array<any>;
  inputComment: string;
  likesNr: number;
  followingNr: number;
  followersNr: number;
  buttonClicked: boolean = true;


  constructor(private commonService: CommonService, private customerService: CustomerService) {
    this.error = false;
    this.resultSuccess = false;
    this.submitted = false;
    this.resultSuccess = false;
    this.resultError = false;
    this.loadData();

  }

  loadData() {
    this.commonService.getData(this.localPath).subscribe(data => {
        this.profile = data.profile;
        this.comments = data.comments;
        this.likesNr = data.profile.likes;
        this.followingNr = data.profile.following;
        this.followersNr = data.profile.followers;
    });
}
  ngOnInit() {
    console.log(this.commonService.getCurrentCustomer())
    this.currentCustomer = this.commonService.getCurrentCustomer();
    
  }

  create(updateCustomer: NgForm) {

    this.submitted = true;

    if (updateCustomer.valid) {
      this.customerService.updateCustomer(this.currentCustomer).subscribe(
        response => {
          let customerId: number = response;
          console.log(customerId)
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Customer Updated " + customerId + " created successfully";
          this.submitted = false;
          updateCustomer.reset();
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

  favIconTapped() {
    this.likesNr = this.likesNr + 1;
    console.log(this.likesNr);
}

followTapped() {
    this.followingNr = this.followingNr + 1;
    this.followersNr = this.followersNr + 1;
}

shareTapped() {
    let queryString = window.location.href;
    alert(queryString);
}

onButtonClick() {
    this.buttonClicked = !this.buttonClicked;
}

}
