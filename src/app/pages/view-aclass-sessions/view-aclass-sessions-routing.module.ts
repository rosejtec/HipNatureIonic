import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAClassSessionsPage } from './view-aclass-sessions.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAClassSessionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAClassSessionsPageRoutingModule {}
