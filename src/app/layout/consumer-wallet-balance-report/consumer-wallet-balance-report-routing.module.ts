import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumerWalletBalanceReportComponent } from './consumer-wallet-balance-report.component';

const routes: Routes = [
  {
    path:'',
    component:ConsumerWalletBalanceReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumerWalletBalanceReportRoutingModule { }
