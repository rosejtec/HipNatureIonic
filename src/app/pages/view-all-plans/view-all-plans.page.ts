import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { CommonService } from '../../services/common.service';
import { PlanService } from '../../services/plan.service';
import { Plan } from '../../models/plan';
import { PurchaseplanService } from '../../services/purchaseplan.service';


import { ModalController } from '@ionic/angular';
import { PaymentModalPage } from '../payment-modal/payment-modal.page';
import { Purchasedplan } from 'src/app/models/purchasedplan';
import { CreditPlan } from 'src/app/models/credit-plan';
import { CreditplanService } from 'src/app/services/creditplan.service';


@Component({
  selector: 'app-view-all-plans',
  templateUrl: './view-all-plans.page.html',
  styleUrls: ['./view-all-plans.page.scss'],
})
export class ViewAllPlansPage implements OnInit {

  @ViewChild('planDetails', { static: false, read: ElementRef }) fab: ElementRef;
  planDetails: Plan;
  currentPlan: Purchasedplan;
  creditPlan: CreditPlan[] = [];

  allPlans: Plan[];



  constructor(private creditPlanService: CreditplanService, private purchaseplanService: PurchaseplanService, private router: Router, public commonService: CommonService, public planService: PlanService, private modalCtrl: ModalController) {
    this.currentPlan =  null
  }

  ngOnInit() {
    this.retrieveCurrentPlan();
    this.planService.retrieveAllPlans().subscribe(
      response => {
        let plans: Plan[] = response;
        this.allPlans = plans
      },
      error => {
        console.log(error);
      }
    );

    this.creditPlanService.retrieveAllPlans().subscribe(
      response =>{
        this.creditPlan = response;
      },
      error => {
        console.log(error);
      }
    )
    console.log(this.creditPlan);
   
  }
  ngAfterViewInit() {
    console.log("afterinit");
    setTimeout(() => {
      
    }, 3000);
  }
  async openPlan(product) {
    this.planService.addPlan(product);
    let modal = await this.modalCtrl.create({
      component: PaymentModalPage,
    });
    modal.onWillDismiss().then(() => {    this.retrieveCurrentPlan();
    });
    modal.present();
  }

  getCustomerType(){
    return this.commonService.getCurrentCustomer().customerTypeEnum;
  }

  retrieveCurrentPlan() {
    this.purchaseplanService.getCurrentPlan().subscribe(
      response => {
        let temp: Purchasedplan = response;
        this.currentPlan = temp;
        JSON.stringify(this.currentPlan)
      },
      error => {
        console.log(error);
      }
    )
  }

}
