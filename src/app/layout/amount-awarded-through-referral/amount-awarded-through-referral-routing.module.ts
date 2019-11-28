import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmountAwardedThroughReferralComponent } from './amount-awarded-through-referral.component';


const routes: Routes = [
  {
    path:'',
    component:AmountAwardedThroughReferralComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmountAwardedThroughReferralRoutingModule { }
