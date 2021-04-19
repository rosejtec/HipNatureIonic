import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RefundRsq } from 'src/app/models/refund-rsq';
import { RetrieveBookingsByCusReq } from 'src/app/models/retrieve-bookings-by-cus-req';
import { MybookingsService } from 'src/app/services/mybookings.service';
import { RefundService } from 'src/app/services/refund.service';

@Component({
  selector: 'app-view-refund-details-modal',
  templateUrl: './view-refund-details-modal.page.html',
  styleUrls: ['./view-refund-details-modal.page.scss'],
})
export class ViewRefundDetailsModalPage implements OnInit {
  selectedBookingToView: RetrieveBookingsByCusReq;
  refundToView: RefundRsq;
  constructor(private refundService: RefundService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.refundToView = this.refundService.getRefundToView();
    this.selectedBookingToView = this.refundToView.bookingRefunded;
    console.log(this.selectedBookingToView)
  }
  close() {
    this.modalCtrl.dismiss();
  }

}
