import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMyPastBookingsPageRoutingModule } from './view-my-past-bookings-routing.module';

import { ViewMyPastBookingsPage } from './view-my-past-bookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMyPastBookingsPageRoutingModule
  ],
  declarations: [ViewMyPastBookingsPage]
})
export class ViewMyPastBookingsPageModule {}
