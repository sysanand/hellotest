import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClearWalletBalanceRoutingModule } from './clear-wallet-balance-routing.module';
import { ClearWalletBalanceComponent } from './clear-wallet-balance.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClearWalletBalanceRoutingModule,
    NgxPaginationModule,
    Ng4LoadingSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ClearWalletBalanceComponent]
})
export class ClearWalletBalanceModule { }
