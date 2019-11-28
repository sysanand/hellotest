import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighestReferralDetailsviewComponent } from './highest-referral-detailsview.component';

const routes: Routes = [
  {
    path:'',
    component:HighestReferralDetailsviewComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighestReferralDetailsviewRoutingModule { }
 