import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMyProfilePageRoutingModule } from './update-my-profile-routing.module';

import { UpdateMyProfilePage } from './update-my-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMyProfilePageRoutingModule
  ],
  declarations: [UpdateMyProfilePage]
})
export class UpdateMyProfilePageModule {}
