import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RetrieveBookingsByCusReq } from 'src/app/models/retrieve-bookings-by-cus-req';
import { MybookingsService } from 'src/app/services/mybookings.service';

@Component({
  selector: 'app-view-booking-detail-modal',
  templateUrl: './view-booking-detail-modal.page.html',
  styleUrls: ['./view-booking-detail-modal.page.scss'],
})
export class ViewBookingDetailModalPage implements OnInit {
  selectedBookingToView: RetrieveBookingsByCusReq;
  constructor(private myBookingService: MybookingsService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.selectedBookingToView = this.myBookingService.selectedBookingToView
    console.log(this.selectedBookingToView)
  }
  close() {
    this.modalCtrl.dismiss();
  }

}
