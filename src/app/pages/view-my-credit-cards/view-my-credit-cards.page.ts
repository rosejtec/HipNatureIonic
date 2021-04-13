import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-view-my-credit-cards',
  templateUrl: './view-my-credit-cards.page.html',
  styleUrls: ['./view-my-credit-cards.page.scss'],
})
export class ViewMyCreditCardsPage implements OnInit {

  currentCustomer : Customer;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
      console.log(this.commonService.getCurrentCustomer())
      this.currentCustomer = this.commonService.getCurrentCustomer();
    }
    addNewCreditCardForm(event){
      console.log("in AddNewCreditCardForm");
    }

}
