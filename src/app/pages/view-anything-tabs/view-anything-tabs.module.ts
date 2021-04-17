import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAnythingTabsPageRoutingModule } from './view-anything-tabs-routing.module';

import { ViewAnythingTabsPage } from './view-anything-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAnythingTabsPageRoutingModule
  ],
  declarations: [ViewAnythingTabsPage]
})
export class ViewAnythingTabsPageModule {}
