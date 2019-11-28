import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponUsageReportRoutingModule } from './coupon-usage-report-routing.module';
import { CouponUsageReportComponent } from './coupon-usage-report.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { FilterPipeModule } from 'ngx-filter-pipe';


@NgModule({
  imports: [
    CommonModule,
    CouponUsageReportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng4LoadingSpinnerModule,
    BsDatepickerModule.forRoot(),
    FilterPipeModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [CouponUsageReportComponent]
})
export class CouponUsageReportModule { }
