import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClearWalletBalanceComponent } from './clear-wallet-balance.component';

const routes: Routes = [
  {
    path:'',
    component:ClearWalletBalanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClearWalletBalanceRoutingModule { }
