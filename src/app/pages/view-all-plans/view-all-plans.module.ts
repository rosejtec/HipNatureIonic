import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllPlansPageRoutingModule } from './view-all-plans-routing.module';

import { ViewAllPlansPage } from './view-all-plans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllPlansPageRoutingModule
  ],
  declarations: [ViewAllPlansPage]
})
export class ViewAllPlansPageModule {}
