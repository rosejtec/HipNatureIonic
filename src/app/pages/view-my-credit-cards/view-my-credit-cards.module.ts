import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMyCreditCardsPageRoutingModule } from './view-my-credit-cards-routing.module';

import { ViewMyCreditCardsPage } from './view-my-credit-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMyCreditCardsPageRoutingModule
  ],
  declarations: [ViewMyCreditCardsPage]
})
export class ViewMyCreditCardsPageModule {}
