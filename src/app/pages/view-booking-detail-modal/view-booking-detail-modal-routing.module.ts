import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewBookingDetailModalPage } from './view-booking-detail-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ViewBookingDetailModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewBookingDetailModalPageRoutingModule {}
