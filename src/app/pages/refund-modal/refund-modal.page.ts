import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { RefundReq } from 'src/app/models/refund-req';
import { RetrieveBookingsByCusReq } from 'src/app/models/retrieve-bookings-by-cus-req';
import { MybookingsService } from 'src/app/services/mybookings.service';
import { RefundService } from 'src/app/services/refund.service';

@Component({
  selector: 'app-refund-modal',
  templateUrl: './refund-modal.page.html',
  styleUrls: ['./refund-modal.page.scss'],
})
export class RefundModalPage implements OnInit {

  selectedBookingToView: RetrieveBookingsByCusReq;
  error: boolean;
  resultSuccess: boolean;
  errorMessage: string;
  refundEntity: RefundReq;
  constructor(private refundService: RefundService, private myBookingService: MybookingsService, private alertController: AlertController, private modalCtrl: ModalController, public loadingController: LoadingController) {
    this.error = false;
    this.resultSuccess = false;
    this.refundEntity = new RefundReq();
  }

  ngOnInit() {
    this.selectedBookingToView = this.myBookingService.selectedBookingToView
  }
  close() {
    this.modalCtrl.dismiss();
  }
  async doRefund() {
    const alert = await this.alertController.create({
      header: 'Refund Session',
      message: 'Confirm Refund for <strong> Booking Id ' + this.selectedBookingToView.bookingId + '</strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Okay',
          handler: async () => {
            const loading = await this.loadingController.create({
              cssClass: 'my-custom-class',
              message: 'Please wait...',
              duration: 2000
            });
            await loading.present();
            setTimeout(() => {
              this.close();
            }, 2000);
            this.refundService.doRefundService(this.selectedBookingToView.bookingId, this.refundEntity.reason).subscribe(response => {
              this.resultSuccess = true;
            },
              error => {
                this.error = true;
                this.errorMessage = error;
              })
          },
        }
      ]
    });
    await alert.present();
  }

}
