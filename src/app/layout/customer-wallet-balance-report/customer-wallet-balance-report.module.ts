import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerWalletBalanceReportRoutingModule } from './customer-wallet-balance-report-routing.module';
import { CustomerWalletBalanceReportComponent } from './customer-wallet-balance-report.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FilterPipeModule } from 'ngx-filter-pipe';
//import { BrowserModule  } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    CustomerWalletBalanceReportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng4LoadingSpinnerModule,
    //BrowserModule,
    FilterPipeModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [CustomerWalletBalanceReportComponent],
  bootstrap: [CustomerWalletBalanceReportComponent]
})
export class CustomerWalletBalanceReportModule { }
