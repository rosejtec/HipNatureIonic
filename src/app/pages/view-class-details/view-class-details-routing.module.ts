import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewClassDetailsPage } from './view-class-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewClassDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewClassDetailsPageRoutingModule {}
