import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighestReferralDetailsviewRoutingModule } from './highest-referral-detailsview-routing.module';
import { HighestReferralDetailsviewComponent } from './highest-referral-detailsview.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HighestReferralDetailsviewRoutingModule,
    NgxPaginationModule,
    Ng4LoadingSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [HighestReferralDetailsviewComponent]
})
export class HighestReferralDetailsviewModule { }
