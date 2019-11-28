import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponAuthenticationOrderViewRoutingModule } from './coupon-authentication-order-view-routing.module';
import { CouponAuthenticationOrderViewComponent } from './coupon-authentication-order-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
@NgModule({
  imports: [
    CommonModule,
    CouponAuthenticationOrderViewRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng4LoadingSpinnerModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [CouponAuthenticationOrderViewComponent]
})
export class CouponAuthenticationOrderViewModule { }
