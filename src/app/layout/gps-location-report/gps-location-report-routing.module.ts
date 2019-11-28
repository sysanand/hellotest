import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GpsLocationReportComponent} from './gps-location-report.component'

const routes: Routes = [
  {
    path:'',
    component:GpsLocationReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GpsLocationReportRoutingModule { }
