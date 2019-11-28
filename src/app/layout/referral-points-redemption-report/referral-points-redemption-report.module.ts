import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralPointsRedemptionReportRoutingModule } from './referral-points-redemption-report-routing.module';
import { ReferralPointsRedemptionReportComponent } from './referral-points-redemption-report.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FilterPipeModule } from 'ngx-filter-pipe';
@NgModule({
  imports: [
    CommonModule,
    ReferralPointsRedemptionReportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng4LoadingSpinnerModule,
    FilterPipeModule,
    BsDatepickerModule.forRoot(),
    

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  declarations: [ReferralPointsRedemptionReportComponent]
})
export class ReferralPointsRedemptionReportModule { }
