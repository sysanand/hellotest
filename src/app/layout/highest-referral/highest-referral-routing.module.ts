import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighestReferralComponent } from './highest-referral.component';

const routes: Routes = [
  {
    path:'',
    component:HighestReferralComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighestReferralRoutingModule { }
