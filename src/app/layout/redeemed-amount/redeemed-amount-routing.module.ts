import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedeemedAmountComponent } from './redeemed-amount.component';

const routes: Routes = [
  {
    path:'',
    component:RedeemedAmountComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedeemedAmountRoutingModule { }
