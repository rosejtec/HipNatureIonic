import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewBookingDetailModalPageRoutingModule } from './view-booking-detail-modal-routing.module';

import { ViewBookingDetailModalPage } from './view-booking-detail-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewBookingDetailModalPageRoutingModule
  ],
  declarations: [ViewBookingDetailModalPage]
})
export class ViewBookingDetailModalPageModule {}
