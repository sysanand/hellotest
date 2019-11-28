import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighestReferralRoutingModule } from './highest-referral-routing.module';
import { HighestReferralComponent } from './highest-referral.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HighestReferralRoutingModule,
    NgxPaginationModule,
    Ng4LoadingSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [HighestReferralComponent]
})
export class HighestReferralModule { }
