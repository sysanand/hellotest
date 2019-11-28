import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerWalletUsageReportComponent } from './customer-wallet-usage-report.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerWalletUsageReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerWalletUsageReportRoutingModule { }
