import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmountAwardedThroughReferralRoutingModule } from './amount-awarded-through-referral-routing.module';
import { AmountAwardedThroughReferralComponent } from './amount-awarded-through-referral.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  imports: [
    CommonModule,
    AmountAwardedThroughReferralRoutingModule,
    NgxPaginationModule,
    Ng4LoadingSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    FilterPipeModule,
    BsDatepickerModule.forRoot()
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [AmountAwardedThroughReferralComponent]
})
export class AmountAwardedThroughReferralModule { }
