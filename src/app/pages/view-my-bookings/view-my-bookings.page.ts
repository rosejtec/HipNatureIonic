import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { RetrieveBookingsByCusReq } from 'src/app/models/retrieve-bookings-by-cus-req';
import { MybookingsService } from 'src/app/services/mybookings.service';
import { RefundModalPage } from '../refund-modal/refund-modal.page';
import { ViewBookingDetailModalPage } from '../view-booking-detail-modal/view-booking-detail-modal.page';

@Component({
  selector: 'app-view-my-bookings',
  templateUrl: './view-my-bookings.page.html',
  styleUrls: ['./view-my-bookings.page.scss'],
})
export class ViewMyBookingsPage implements OnInit {
  @ViewChild('planDetails', { static: false, read: ElementRef }) fab: ElementRef;
  @ViewChild('refundDetails', { static: false, read: ElementRef }) fab2: ElementRef;
  myBooking: RetrieveBookingsByCusReq[];
  sortkey = 'startTime';
  sortDirection = 2;

  constructor(private mybookings: MybookingsService, private modalCtrl: ModalController, public loadingController: LoadingController) { }

  ngOnInit() {
    this.getMyBookings();
  }
  getMyBookings() {
    this.mybookings.retrieveMyBookings().subscribe(
      response => {
        this.myBooking = response;
      }
    )
  }
  sortBy(key) {
    this.sortkey = key;
    if (this.sortDirection == 1) {
      this.sortDirection = 2;
    } else {
      this.sortDirection = 1;
    }
    this.sort();
  }
  sort() {
    this.sortkey = 'startTime';
    if (this.sortDirection == 1) {
      this.myBooking = this.myBooking.sort((a, b) => {
        const valA = a[this.sortkey];
        const valB = b[this.sortkey];
        return valA.localeCompare(valB);
      });
    } else if (this.sortDirection == 2) {
      this.myBooking = this.myBooking.sort((a, b) => {
        const valA = a[this.sortkey];
        const valB = b[this.sortkey];
        return valB.localeCompare(valA);
      });
    } else {
      this.sortDirection = 0;
      this.sortkey = null;
    }
  }
  async openBookingDetail(value) {
    this.mybookings.selectedBookingToView = value;
    let modal = await this.modalCtrl.create({
      component: ViewBookingDetailModalPage,
    });
    modal.onWillDismiss().then(() => {

    });
    modal.present();

  }
  async doRefund(value) {
    this.mybookings.selectedBookingToView = value;
    let modal = await this.modalCtrl.create({
      component: RefundModalPage,
    });
    modal.onWillDismiss().then(() => {
      let i = this.myBooking.indexOf(value);
      this.myBooking.splice(i, 1);
    });
    modal.present();
  }
}
