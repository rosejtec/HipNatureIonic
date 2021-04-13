import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMyCreditCardsPage } from './view-my-credit-cards.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMyCreditCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMyCreditCardsPageRoutingModule {}
