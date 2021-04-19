import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewRefundDetailsModalPageRoutingModule } from './view-refund-details-modal-routing.module';

import { ViewRefundDetailsModalPage } from './view-refund-details-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewRefundDetailsModalPageRoutingModule
  ],
  declarations: [ViewRefundDetailsModalPage]
})
export class ViewRefundDetailsModalPageModule {}
