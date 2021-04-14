import { Component, OnInit } from '@angular/core';
import { planDetails, PlanService } from 'src/app/services/plan.service';
import { ModalController, AlertController } from '@ionic/angular';


import { Creditcard } from '../../models/creditcard';
import { CreditcardService } from '../../services/creditcard.service';
import { PurchaseplanService } from 'src/app/services/purchaseplan.service';


@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.page.html',
  styleUrls: ['./payment-modal.page.scss'],
})
export class PaymentModalPage implements OnInit {
  cart: planDetails;
  creditcards: Creditcard[];
  creditCardChosen: number;
  message:string;
  creditCardChosenCCV: number;
  resultSuccess: boolean;

  constructor(private purchaseplanservice: PurchaseplanService, private creditCardservice: CreditcardService, private modalCtrl: ModalController, private alertCtrl: AlertController, private planService:PlanService) {
    this.resultSuccess = false;
   }

  ngOnInit() {
    
    this.cart = this.planService.getPlan();
    console.log(this.cart)
    this.creditCardservice.getCreditCards().subscribe(
      response => {
        this.creditcards = response;
      }
    )
  }

  makePayment(value){
    console.log("Make Payment Method")
    for (let [index, p] of this.creditcards.entries()){
      if (p.creditCardId == this.creditCardChosen && p.cvv == this.creditCardChosenCCV.toString()){
        console.log("Pass")
        this.purchaseplanservice.makePurchasePlan(this.creditCardChosen, value).subscribe(response => {
          this.resultSuccess = true;
          this.message="Payment Successful"
        },
        error => {
          this.resultSuccess = false;
          this.message = "An error has occurred while buying a Plan: " + error;
        }
        )
      } else{
        this.message = "Invalid Option: CVV number does not match";
      }
    }
  }
  maskValueCCNumber(p) {
    var masked = '************' + p.cardNumber.substr(-4);
    return masked;
  }
  checkRequire(){
    if(this.creditCardChosen != null && this.creditCardChosenCCV != null){
      return false
    }
    return true;
  }

}
