import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMyPastBookingsPage } from './view-my-past-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMyPastBookingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMyPastBookingsPageRoutingModule {}
