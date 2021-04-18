import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefundModalPage } from './refund-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RefundModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefundModalPageRoutingModule {}
