import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { RefundRsq } from 'src/app/models/refund-rsq';
import { MybookingsService } from 'src/app/services/mybookings.service';
import { RefundService } from 'src/app/services/refund.service';
import { ViewBookingDetailModalPage } from '../view-booking-detail-modal/view-booking-detail-modal.page';
import { ViewRefundDetailsModalPage } from '../view-refund-details-modal/view-refund-details-modal.page';

@Component({
  selector: 'app-my-transaction-history',
  templateUrl: './my-transaction-history.page.html',
  styleUrls: ['./my-transaction-history.page.scss'],
})
export class MyTransactionHistoryPage implements OnInit {

  myRefunds: RefundRsq[];
  error: boolean;
  resultSuccess: boolean;
  errorMessage: string;

  constructor(public loadingController: LoadingController, private refundService: RefundService, private modalCtrl: ModalController, private alertController: AlertController, private navCtrl: NavController) {
    this.error = false;
    this.resultSuccess = false;
    this.myRefunds = null;
  }


  async ngOnInit() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
    this.getMyRefundList();
  }
  getMyRefundList(){
    this.refundService.retrieveRefund().subscribe(
      response => {
        this.myRefunds = response
        console.log(response)
      }
    )
  }
  async openBookingDetail(value) {
    this.refundService.setRefundToView(value);
    let modal = await this.modalCtrl.create({
      component: ViewRefundDetailsModalPage,
    });
    modal.onWillDismiss().then(() => {

    });
    modal.present();

  }
}
