import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewClassDetailsPageRoutingModule } from './view-class-details-routing.module';

import { ViewClassDetailsPage } from './view-class-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewClassDetailsPageRoutingModule
  ],
  declarations: [ViewClassDetailsPage]
})
export class ViewClassDetailsPageModule {}
