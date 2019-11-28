import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ConsumerWalletBalanceReportRoutingModule } from './consumer-wallet-balance-report-routing.module';
import { ConsumerWalletBalanceReportComponent } from './consumer-wallet-balance-report.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    CommonModule,
    ConsumerWalletBalanceReportRoutingModule,
    Ng4LoadingSpinnerModule,
    NgxPaginationModule,
    FilterPipeModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [ConsumerWalletBalanceReportComponent]
})
export class ConsumerWalletBalanceReportModule { }
