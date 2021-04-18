import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RetrieveBookingsByCusReq } from 'src/app/models/retrieve-bookings-by-cus-req';
import { MybookingsService } from 'src/app/services/mybookings.service';
import { ViewBookingDetailModalPage } from '../view-booking-detail-modal/view-booking-detail-modal.page';

@Component({
  selector: 'app-view-my-past-bookings',
  templateUrl: './view-my-past-bookings.page.html',
  styleUrls: ['./view-my-past-bookings.page.scss'],
})
export class ViewMyPastBookingsPage implements OnInit {

  myBooking:RetrieveBookingsByCusReq[]
  constructor(private myBookingService:MybookingsService, private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log("View Past Booking OnInit")
    this.getMyBookings()
  }
  getMyBookings() {
    this.myBookingService.retrieveMyPastBookings().subscribe(
      response => {
        this.myBooking = response;
      }
    )
  }
  async openBookingDetail(value){
    this.myBookingService.selectedBookingToView = value;
    console.log(value)
    console.log("in openBookingDetail")
    let modal = await this.modalCtrl.create({
      component: ViewBookingDetailModalPage,
    });
    modal.onWillDismiss().then(() => {   
    });
    modal.present();

  }

}
