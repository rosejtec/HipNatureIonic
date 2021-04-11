import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllClassesPage } from './view-all-classes.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllClassesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllClassesPageRoutingModule {}
