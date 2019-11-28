import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtualWalletBalanceComponent } from './virtual-wallet-balance.component';

const routes: Routes = [
  {
    path:'',
    component:VirtualWalletBalanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VirtualWalletBalanceRoutingModule { }
