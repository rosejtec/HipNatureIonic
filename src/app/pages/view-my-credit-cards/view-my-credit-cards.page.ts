import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CommonService } from 'src/app/services/common.service';
import { ModalController } from '@ionic/angular';
import {AddcreditCardModalPage} from'../../pages/addcredit-card-modal/addcredit-card-modal.page';

@Component({
  selector: 'app-view-my-credit-cards',
  templateUrl: './view-my-credit-cards.page.html',
  styleUrls: ['./view-my-credit-cards.page.scss'],
})
export class ViewMyCreditCardsPage implements OnInit {
  @ViewChild('currentCustomer', {static: false, read: ElementRef})fab: ElementRef;
  currentCustomer : Customer;
  constructor(private commonService: CommonService, private modalCtrl: ModalController) { }

  ngOnInit() {
      console.log(this.commonService.getCurrentCustomer())
      this.currentCustomer = this.commonService.getCurrentCustomer();
    }
    async addNewCreditCardForm() {
      let modal = await this.modalCtrl.create({
        component: AddcreditCardModalPage,
      });
      modal.onWillDismiss().then(() => {
      });
      modal.present();
    }

}
