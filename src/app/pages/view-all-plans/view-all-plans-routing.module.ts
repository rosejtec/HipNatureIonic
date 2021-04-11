import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllPlansPage } from './view-all-plans.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllPlansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllPlansPageRoutingModule {}
