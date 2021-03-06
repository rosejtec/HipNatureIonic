import { Partner } from './../../models/partner';
import { AppRoutingModule } from './../../app-routing.module'
import { ViewAllClassesPageModule } from './../view-all-classes/view-all-classes.module'
import { Component, OnInit,EventEmitter ,Output } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { NgForm } from '@angular/forms'

import { CommonService } from '../../services/common.service'
import { ClassService } from '../../services/class.service'
import { Class } from '../../models/class'
import { AlertController } from '@ionic/angular'
import { Review } from '../../models/review'
import { ReviewService } from '../../services/review.service'
import { NavController } from '@ionic/angular'
import { NavigationExtras } from '@angular/router'
import { Color } from '../../models/color.enum'
import { GetReviews } from '../../models/get-reviews';

@Component({
  selector: 'app-view-class-details',
  templateUrl: './view-class-details.page.html',
  styleUrls: ['./view-class-details.page.scss'],
})
export class ViewClassDetailsPage implements OnInit {
  classId: number
  classToView: Class
  retrieveClassError: boolean
  error: boolean
  errorMessage: string
  resultSuccess: boolean
  reviews: GetReviews[]
  resultError: boolean
  message: string
  submitted: boolean
  newReview: Review
  partner:Partner
  // @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private classService: ClassService,
    private reviewService: ReviewService,
    public alertController: AlertController,
    public navCtrl: NavController,
  ) {
    this.retrieveClassError = false
    this.error = false
    this.resultSuccess = false
    this.submitted = false
    this.newReview = new Review()
    this.newReview.reviewRating = 1

    this.resultSuccess = false
    this.resultError = false
  }

  ngOnInit() {
    console.log(parseInt(this.activatedRoute.snapshot.paramMap.get('classId')))
    this.classId = parseInt(
      this.activatedRoute.snapshot.paramMap.get('classId'),
    )
    this.refreshClass()
    this.refreshReview()
    this.refreshPartner()
    this.newReview = new Review()
    console.log(this.retrieveClassError)
  }

  async refreshReview() {
    this.reviewService.getAllReviewsByClassId(this.classId).subscribe(
      (response) => {
        this.reviews = response
        console.log(this.reviews)
      },
      (error) => {
        this.retrieveClassError = true
        console.log('********** ViewClassDetailsPage.ts: ' + error)
      },
    )
  }

  async refreshClass() {
    this.classService.getClassByClassId(this.classId).subscribe(
      (response) => {
        this.classToView = response
        console.log(this.classToView)
      },
      (error) => {
        this.retrieveClassError = true
        console.log('********** ViewClassDetailsPage.ts: ' + error)
      },
    )
    console.log(this.retrieveClassError)
  }

  async refreshPartner() {
    this.classService.getPartnerByClass(this.classId).subscribe(
      (response) => {
        this.partner = response
        console.log(this.partner)
      },
      (error) => {
        this.retrieveClassError = true
        console.log('********** ViewClassPartnerPage.ts: ' + error)
      },
    )
    console.log(this.retrieveClassError)
  }

  viewSessionsDetails(event, p) {
    console.log(p)
    this.router.navigate(['/view-aclass-sessions/' + p])
  }
  back() {
    this.router.navigate(['/view-all-classes'])
  }

  clear() {
    this.submitted = false
    this.newReview = new Review()
  }

  create(createReviewForm: NgForm) {
    this.submitted = true

    if (createReviewForm.valid) {
      this.reviewService
        .createNewReview(this.newReview, this.classId)
        .subscribe(
          (response) => {
            let newReviewId: number = response
            console.log(newReviewId)
            this.resultSuccess = true
            this.resultError = false
            this.message =
              'New product ' + newReviewId + ' created successfully'
            this.refreshReview()

            this.newReview = new Review()
            this.submitted = false
            createReviewForm.reset()
          },
          (error) => {
            this.resultError = true
            this.resultSuccess = false
            this.message =
              'An error has occurred while creating the new Review: ' + error

            console.log('********** CreateNewReviewPage.ts: ' + error)
          },
        )
    }
  }

  rate(index: number) {
    this.newReview.reviewRating = index
    // this.ratingChange.emit(this.newReview.reviewRating)
  }
  isAboveRating(index: number) {
    return index > this.newReview.reviewRating
  }

  getColor(index: number) {
    if (this.isAboveRating(index)) {
      return Color.GREY
    }

    switch (this.newReview.reviewRating) {
      case 1:

      case 2:
        return Color.RED

      case 3:
        return Color.YELLOW

      case 4:

      case 5:
        return Color.GREEN

      default:
        return Color.GREY
    }
  }

  isAboveRatingFixed(index: number,given: number) {
    return index > given
  }
  getColorFixed(index: number, given: number) {
    if (this.isAboveRatingFixed(index,given)) {
      return Color.GREY
    }

    switch (given) {
      case 1:

      case 2:
        return Color.RED

      case 3:
        return Color.YELLOW

      case 4:

      case 5:
        return Color.GREEN

      default:
        return Color.GREY
    }
  }
}
