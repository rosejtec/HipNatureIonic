import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMyBookingsPageRoutingModule } from './view-my-bookings-routing.module';

import { ViewMyBookingsPage } from './view-my-bookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMyBookingsPageRoutingModule
  ],
  declarations: [ViewMyBookingsPage]
})
export class ViewMyBookingsPageModule {}
