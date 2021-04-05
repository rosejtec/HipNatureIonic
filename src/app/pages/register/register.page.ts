import { Component, OnInit } from '@angular/core';

import {NgForm} from'@angular/forms';
import{ActivatedRoute, Router} from '@angular/router';

//Service
import{CustomerService} from '../../services/customer.service';
//Model
import {Customer} from '../../models/customer';

//Enum
import { CustomerTypeEnum } from '../../models/customer-type-enum.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  submitted:boolean;
  newCustomer: Customer;
  message:String;
  resultSuccess: boolean;
  resultError: boolean;

  customerEnum =[
    {
      val : CustomerTypeEnum[0]
    },
    {
      val : CustomerTypeEnum[1]
    },
    {
      val : CustomerTypeEnum[2]
    }
  ]


  constructor(private route: Router, private activatedRoute:ActivatedRoute, private customerService:CustomerService) { 
    this.submitted = false;
    this.resultError = false;
    this.resultSuccess = false;
    this.newCustomer = new Customer();
  }

  ngOnInit() {
  }

  clear(){
    this.submitted = false;
    this.newCustomer = new Customer();
  }

  create(createCustomerForm:NgForm){
    this.submitted = true;
    console.log('tests');
    console.log('customer');
    console.log(this.newCustomer.customerName);
    console.log(this.newCustomer.phone);
    console.log(this.newCustomer.email);
    console.log(this.newCustomer.username);
    console.log(this.newCustomer.password);
    console.log(this.newCustomer.customerTypeEnum);
    console.log(createCustomerForm.valid);
    if(createCustomerForm.valid){
      this.customerService.createNewCustomer(this.newCustomer).subscribe(response => {
        let newCustomerName:number = response;
        this.resultSuccess = true;
        this.resultError = false;
        this.message = "New Customer Id " +  newCustomerName + " successfully created";

        this.newCustomer = new Customer();
        this.submitted = false;
        createCustomerForm.reset();
      },
      error => {
        this.resultError = true;
        this.resultSuccess = false;
        this.message = "An error has occurred while creating new Customer: " + error;
      }
      )
    }
  }

}
