import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewRefundDetailsModalPage } from './view-refund-details-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ViewRefundDetailsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRefundDetailsModalPageRoutingModule {}
