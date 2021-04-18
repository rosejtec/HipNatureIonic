import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAnythingTabsPage } from './view-anything-tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: ViewAnythingTabsPage,
    children: [
      {
        path: 'bookings',
        loadChildren: '../view-my-bookings/view-my-bookings.module#ViewMyBookingsPageModule'
      },
      {
        path: 'pastBookings',
        loadChildren: '../view-my-past-bookings/view-my-past-bookings.module#ViewMyPastBookingsPageModule'
      },
      {
        path: 'transactionHistory',
        loadChildren: '../my-transaction-history/my-transaction-history.module#MyTransactionHistoryPageModule'
      }
    ]
  },{
    path: '',
    redirectTo: 'tabs/bookings',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAnythingTabsPageRoutingModule {}
