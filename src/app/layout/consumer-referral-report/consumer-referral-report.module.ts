import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumerReferralReportRoutingModule } from './consumer-referral-report-routing.module';
import { ConsumerReferralReportComponent } from './consumer-referral-report.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
// import { AutocompleteModule } from 'ng2-input-autocomplete';

@NgModule({
  imports: [
    CommonModule,
    ConsumerReferralReportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng4LoadingSpinnerModule,
    //BrowserModule,
    FilterPipeModule,
    BsDatepickerModule.forRoot(),
    // AutocompleteModule.forRoot()
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA 
  ],
 
  declarations: [ConsumerReferralReportComponent]
})
export class ConsumerReferralReportModule { } 
