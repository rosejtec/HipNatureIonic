import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefundModalPageRoutingModule } from './refund-modal-routing.module';

import { RefundModalPage } from './refund-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefundModalPageRoutingModule
  ],
  declarations: [RefundModalPage]
})
export class RefundModalPageModule {}
