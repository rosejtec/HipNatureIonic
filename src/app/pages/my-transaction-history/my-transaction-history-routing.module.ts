import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTransactionHistoryPage } from './my-transaction-history.page';

const routes: Routes = [
  {
    path: '',
    component: MyTransactionHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTransactionHistoryPageRoutingModule {}
