import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponAuthenticationTrackRoutingModule } from './coupon-authentication-track-routing.module';
import { CouponAuthenticationTrackComponent } from './coupon-authentication-track.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
@NgModule({
  imports: [
    CommonModule,
    CouponAuthenticationTrackRoutingModule,
    NgxPaginationModule,
    Ng4LoadingSpinnerModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [CouponAuthenticationTrackComponent]
})
export class CouponAuthenticationTrackModule { }
