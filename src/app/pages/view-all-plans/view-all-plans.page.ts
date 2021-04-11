import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CommonService } from '../../services/common.service';
import { PlanService } from '../../services/plan.service';
import { Plan } from '../../models/plan';
@Component({
  selector: 'app-view-all-plans',
  templateUrl: './view-all-plans.page.html',
  styleUrls: ['./view-all-plans.page.scss'],
})
export class ViewAllPlansPage implements OnInit {
  allPlans : Plan[];


  constructor(private router: Router, public commonService: CommonService, public planService:PlanService) { 
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

}
