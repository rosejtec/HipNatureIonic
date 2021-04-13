import { Component,OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CommonService } from '../../services/common.service';
import { PlanService } from '../../services/plan.service';
import { Plan } from '../../models/plan';


import { ModalController } from '@ionic/angular';
import { PaymentModalPage } from '../payment-modal/payment-modal.page';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-view-all-plans',
  templateUrl: './view-all-plans.page.html',
  styleUrls: ['./view-all-plans.page.scss'],
})
export class ViewAllPlansPage implements OnInit {
  
  @ViewChild('planDetails', {static: false, read: ElementRef})fab: ElementRef;
  planDetails:Plan;

  allPlans : Plan[];

	

  constructor(private router: Router, public commonService: CommonService, public planService:PlanService,private modalCtrl: ModalController) { 
  }

  ngOnInit() {
    
    this.planService.retrieveAllPlans().subscribe(
      response => {
          let plans: Plan[] = response;
          this.allPlans=plans
      },
      error => {
          console.log(error);
      }
  );

  }
  ngAfterViewInit(){
    console.log("afterinit");
    setTimeout(() => {
    }, 1000);
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

}
