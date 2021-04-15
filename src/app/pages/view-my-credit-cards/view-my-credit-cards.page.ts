import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Customer } from 'src/app/models/customer';

import { CommonService } from 'src/app/services/common.service';
import { CreditcardService } from '../../services/creditcard.service';


import { AlertController, ModalController, NavController } from '@ionic/angular';
import { AddcreditCardModalPage } from '../../pages/addcredit-card-modal/addcredit-card-modal.page';
import { Creditcard } from '../../models/creditcard';


@Component({
  selector: 'app-view-my-credit-cards',
  templateUrl: './view-my-credit-cards.page.html',
  styleUrls: ['./view-my-credit-cards.page.scss'],
})
export class ViewMyCreditCardsPage implements OnInit {
  @ViewChild('currentCustomer', { static: false, read: ElementRef }) fab: ElementRef;
  currentCustomer: Customer;
  creditcards: Creditcard[];
  error: boolean;
  resultSuccess: boolean;
  errorMessage: string;



  constructor(private commonService: CommonService, private creditCardservice: CreditcardService, private modalCtrl: ModalController, private alertController: AlertController, private navCtrl:NavController) {
    this.error = false;
    this.resultSuccess = false;
  }

  ngOnInit() {
    console.log(this.commonService.getCurrentCustomer())
    this.currentCustomer = this.commonService.getCurrentCustomer();
    this.getAllCreditCard();
    console.log(this.creditcards)
  }
  async addNewCreditCardForm() {
    let modal = await this.modalCtrl.create({
      component: AddcreditCardModalPage,
    });
    modal.onWillDismiss().then(() => {
      this.getAllCreditCard();
    });
    modal.present();
  }
  getAllCreditCard() {
    this.creditCardservice.getCreditCards().subscribe(
      response => {
        this.creditcards = response;
      }
    )
  }

  async deleteCreditCard(value) {
    console.log("DeleteCreditCard")
    console.log(value)
    const alert = await this.alertController.create({
      header: 'Confirm Delete Credit Card',
      message: 'Confirm delete Credit Card?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Okay',
          handler: () => {
            this.creditCardservice.deleteCreditCards(value).subscribe(
              response => {
                 this.resultSuccess = true;
                  this.creditcards.splice(value, 1);
                  this.getAllCreditCard();
              },
              error => {
                this.error = true;
                this.errorMessage = error;
              }
            );
          },
          
        }
      ]
    });
    await alert.present();
  }
  maskValueCCNumber(p) {
    var masked = '************' + p.cardNumber.substr(-4);
    return masked;
  }

  maskValueCCV() {
    var masked = '***'
    return masked;
  }

}
