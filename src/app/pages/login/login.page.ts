import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CommonService } from '../../services/common.service';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import { CustomerTypeEnum } from '../../models/customer-type-enum.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  submitted: boolean;
  username: string;
  password: string;
  loginError: boolean;
  loginErrorMessage: string;

  constructor(private router: Router,
      public commonService: CommonService,
      private customerService: CustomerService) {
         
        console.log(commonService.getIsLogin())
      
        this.submitted = false;
  }

  ngOnInit() {
  }


  clear() {
      this.username = "";
      this.password = "";
  }



  customerLogin(customerLoginForm: NgForm) {
      this.submitted = true;

      if (customerLoginForm.valid) {
          this.commonService.setUsername(this.username);
          this.commonService.setPassword(this.password);

          this.customerService.customerLogin(this.username, this.password).subscribe(
              response => {
                  let staff: Customer = response;

                  // if (response.customerTypeEnum?.toString() == 'CASHIER') {
                  //  staff.customerTypeEnum = CustomerTypeEnum.CASHIER;
                  // }
                  // else if (response.customerTypeEnum?.toString() == 'MANAGER') {
                  //  staff.customerTypeEnum = CustomerTypeEnum.MANAGER;
                  // }

                  if (staff != null) {
                      this.commonService.setIsLogin(true);
                      this.commonService.setCurrentCustomer(staff);
                      this.loginError = false;
                  }
                  else {
                      this.loginError = true;
                  }
              },
              error => {
                  this.loginError = true;
                  this.loginErrorMessage = error
              }
          );
      }
      else {
      }
      this.router.navigate(["/index"]);
  }



  customerLogout(): void {
      this.commonService.setIsLogin(false);
      this.commonService.setCurrentCustomer(null);
  }



  back() {
      this.router.navigate(["/index"]);
  }
}

