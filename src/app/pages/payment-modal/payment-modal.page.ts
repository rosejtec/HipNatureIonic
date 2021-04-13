import { Component, OnInit } from '@angular/core';
import { planDetails, PlanService } from 'src/app/services/plan.service';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.page.html',
  styleUrls: ['./payment-modal.page.scss'],
})
export class PaymentModalPage implements OnInit {
  cart: planDetails;
  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController, private planService:PlanService) { }

  ngOnInit() {
    
    this.cart = this.planService.getPlan();
    console.log('aaaa')
    console.log(this.cart)
  }

}
