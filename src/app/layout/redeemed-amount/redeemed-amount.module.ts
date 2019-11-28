import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedeemedAmountRoutingModule } from './redeemed-amount-routing.module';
import { RedeemedAmountComponent } from './redeemed-amount.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    CommonModule,
    RedeemedAmountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng4LoadingSpinnerModule,
    //BrowserModule,
    FilterPipeModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [RedeemedAmountComponent]
})
export class RedeemedAmountModule { }
