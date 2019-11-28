import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualWalletBalanceRoutingModule } from './virtual-wallet-balance-routing.module';
import { VirtualWalletBalanceComponent } from './virtual-wallet-balance.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    VirtualWalletBalanceRoutingModule,
    NgxPaginationModule,
    Ng4LoadingSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [VirtualWalletBalanceComponent]
})
export class VirtualWalletBalanceModule { }
