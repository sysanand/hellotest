import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { NvD3Module } from 'ng2-nvd3';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NvD3Module,
    Ng4LoadingSpinnerModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
