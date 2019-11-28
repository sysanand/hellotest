import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumersRedemptionReportComponent } from './consumers-redemption-report.component';

const routes: Routes = [
  {
    path:'',
    component:ConsumersRedemptionReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumersRedemptionReportRoutingModule { }
