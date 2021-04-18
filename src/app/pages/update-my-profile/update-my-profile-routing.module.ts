import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMyProfilePage } from './update-my-profile.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMyProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMyProfilePageRoutingModule {}
