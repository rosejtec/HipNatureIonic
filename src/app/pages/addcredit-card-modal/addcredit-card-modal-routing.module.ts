import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcreditCardModalPage } from './addcredit-card-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddcreditCardModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcreditCardModalPageRoutingModule {}
