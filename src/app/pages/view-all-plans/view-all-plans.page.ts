import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { CommonService } from '../../services/common.service';
import { PlanService } from '../../services/plan.service';
import { Plan } from '../../models/plan';
import { PurchaseplanService } from '../../services/purchaseplan.service';


import { ModalController } from '@ionic/angular';
import { PaymentModalPage } from '../payment-modal/payment-modal.page';
import { Purchasedplan } from 'src/app/models/purchasedplan';


@Component({
  selector: 'app-view-all-plans',
  templateUrl: './view-all-plans.page.html',
  styleUrls: ['./view-all-plans.page.scss'],
})
export class ViewAllPlansPage implements OnInit {

  @ViewChild('planDetails', { static: false, read: ElementRef }) fab: ElementRef;
  planDetails: Plan;
  currentPlan: Purchasedplan;

  allPlans: Plan[];



  constructor(private purchaseplanService: PurchaseplanService, private router: Router, public commonService: CommonService, public planService: PlanService, private modalCtrl: ModalController) {
    this.currentPlan =  null
  }

  ngOnInit() {

    this.planService.retrieveAllPlans().subscribe(
      response => {
        let plans: Plan[] = response;
        this.allPlans = plans
      },
      error => {
        console.log(error);
      }
    );
   
  }
  ngAfterViewInit() {
    console.log("afterinit");
    setTimeout(() => {
      this.retrieveCurrentPlan();
    }, 3000);
  }
  async openPlan(product) {
    this.planService.addPlan(product);
    let modal = await this.modalCtrl.create({
      component: PaymentModalPage,
    });
    modal.onWillDismiss().then(() => {
    });
    modal.present();
  }


  retrieveCurrentPlan() {
    this.purchaseplanService.getCurrentPlan().subscribe(
      response => {
        let temp: Purchasedplan = response;
        this.currentPlan = temp;
        JSON.stringify(this.currentPlan)
        console.log(this.currentPlan)
      },
      error => {
        console.log(error);
      }
    )
  }

}
