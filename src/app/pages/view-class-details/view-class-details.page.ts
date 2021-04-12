import { ViewAllClassesPageModule } from './../view-all-classes/view-all-classes.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CommonService } from '../../services/common.service';
import { ClassService } from '../../services/class.service';
import { Class } from '../../models/class';
import { AlertController } from '@ionic/angular';
import { Review } from '../../models/review';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-view-class-details',
  templateUrl: './view-class-details.page.html',
  styleUrls: ['./view-class-details.page.scss'],
})
export class ViewClassDetailsPage implements OnInit {

  classId: number;
  classToView: Class;
  retrieveClassError: boolean;
  error: boolean;
  errorMessage: string;
  resultSuccess: boolean;
  reviews:Review[];
  resultError: boolean;
  message: string;
  submitted:boolean;
  newReview:Review;


  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private classService: ClassService,
    private reviewService: ReviewService,
    public alertController: AlertController) {
    this.retrieveClassError = false;
    this.error = false;
    this.resultSuccess = false;
    this.submitted = false;
    this.newReview = new Review();
    this.newReview.reviewRating = 1;

    this.resultSuccess = false;
    this.resultError = false;
  }



  ngOnInit() {
    console.log(parseInt(this.activatedRoute.snapshot.paramMap.get('classId')));
    this.classId = parseInt(this.activatedRoute.snapshot.paramMap.get('classId'));
    this.refreshClass();
    this.refreshReview();
    console.log(this.retrieveClassError)
  }


  async refreshReview() {
    this.reviewService.getAllReviewsByClassId(this.classId).subscribe(
      response => {
        this.reviews = response;
      },
      error => {
        this.retrieveClassError = true;
        console.log('********** ViewClassDetailsPage.ts: ' + error);
      }
    );
  }


  async refreshClass() {
    this.classService.getClassByClassId(this.classId).subscribe(
      response => {
        this.classToView = response;
        console.log(this.classToView)
      },
      error => {
        this.retrieveClassError = true;
        console.log('********** ViewClassDetailsPage.ts: ' + error);
      }
    );
    console.log(this.retrieveClassError)

  }



  back() {
    this.router.navigate(["/view-all-classes"]);
  }

  clear() {
    this.submitted = false;
    this.newReview = new Review();
  }



  create(createReviewForm: NgForm) {

    this.submitted = true;

    if (createReviewForm.valid) {
      this.reviewService.createNewReview(this.newReview).subscribe(
        response => {
          let newProductId: number = response;
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "New product " + newProductId + " created successfully";

          this.newReview = new Review();
          this.submitted = false;
          createReviewForm.reset();
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while creating the new Review: " + error;

          console.log('********** CreateNewReviewPage.ts: ' + error);
        }
      );
    }
  }

}

