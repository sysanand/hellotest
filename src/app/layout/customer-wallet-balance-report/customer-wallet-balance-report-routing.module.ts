import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerWalletBalanceReportComponent } from './customer-wallet-balance-report.component';

const routes: Routes = [
  {
    path:'',
    component:CustomerWalletBalanceReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerWalletBalanceReportRoutingModule { }
