import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllClassesPageRoutingModule } from './view-all-classes-routing.module';

import { ViewAllClassesPage } from './view-all-classes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllClassesPageRoutingModule
  ],
  declarations: [ViewAllClassesPage]
})
export class ViewAllClassesPageModule {}
