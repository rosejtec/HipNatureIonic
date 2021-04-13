import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcreditCardModalPageRoutingModule } from './addcredit-card-modal-routing.module';

import { AddcreditCardModalPage } from './addcredit-card-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcreditCardModalPageRoutingModule
  ],
  declarations: [AddcreditCardModalPage]
})
export class AddcreditCardModalPageModule {}
