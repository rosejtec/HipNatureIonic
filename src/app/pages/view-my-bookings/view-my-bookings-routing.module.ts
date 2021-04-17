import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMyBookingsPage } from './view-my-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMyBookingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMyBookingsPageRoutingModule {}
