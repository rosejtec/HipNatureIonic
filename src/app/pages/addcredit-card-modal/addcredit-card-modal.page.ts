import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Creditcard } from 'src/app/models/creditcard';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditcardService } from '../../services/creditcard.service';
@Component({
  selector: 'app-addcredit-card-modal',
  templateUrl: './addcredit-card-modal.page.html',
  styleUrls: ['./addcredit-card-modal.page.scss'],
})



export class AddcreditCardModalPage implements OnInit {
  newCreditCard: Creditcard;
  message: String;
  resultSuccess: boolean;
  resultError: boolean;
  submitted: boolean;

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController, private route: Router,
    private activatedRoute: ActivatedRoute, private creditcardService: CreditcardService) {
    this.submitted = false;
    this.resultError = false;
    this.resultSuccess = false;
    this.newCreditCard = new Creditcard();
  }

  ngOnInit() {
  }
  close() {
    this.modalCtrl.dismiss();
  }
  clear(createCreditCardForm: NgForm) {
    console.log('CLEAR');
    console.log(this.newCreditCard.cardNumber);
    console.log(this.newCreditCard.cvv);
    console.log(this.newCreditCard.cardNumber);
    this.submitted = false;
    this.newCreditCard = new Creditcard();
    createCreditCardForm.reset();
  }
  numericOnly(event): boolean {
    let pattern = /^([0-9])$/;
    let result = pattern.test(event.key);
    return result;
  }
  create(createCreditCardForm: NgForm) {
    console.log('In Create Credit Card Form');
    this.submitted = true;
    if (createCreditCardForm.valid) {
      this.creditcardService.addNewCreditCard(this.newCreditCard).subscribe(response => {
        let newCardId: number = response;
        this.resultSuccess = true;
        this.resultError = false;
        this.message = "Card Id " + newCardId + " successfully created";

        this.newCreditCard = new Creditcard();
        this.submitted = false;
        createCreditCardForm.reset();
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
