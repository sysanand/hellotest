import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockedAmountRoutingModule } from './blocked-amount-routing.module';
import { BlockedAmountComponent } from './blocked-amount.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  imports: [
    CommonModule,
    BlockedAmountRoutingModule,
    Ng4LoadingSpinnerModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    FilterPipeModule,
    BsDatepickerModule.forRoot()

  ],
  declarations: [BlockedAmountComponent]
})
export class BlockedAmountModule { }
