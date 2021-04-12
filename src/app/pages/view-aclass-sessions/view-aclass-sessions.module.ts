import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAClassSessionsPageRoutingModule } from './view-aclass-sessions-routing.module';

import { ViewAClassSessionsPage } from './view-aclass-sessions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAClassSessionsPageRoutingModule
  ],
  declarations: [ViewAClassSessionsPage]
})
export class ViewAClassSessionsPageModule {}
