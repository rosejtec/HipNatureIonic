import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTransactionHistoryPageRoutingModule } from './my-transaction-history-routing.module';

import { MyTransactionHistoryPage } from './my-transaction-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyTransactionHistoryPageRoutingModule
  ],
  declarations: [MyTransactionHistoryPage]
})
export class MyTransactionHistoryPageModule {}
