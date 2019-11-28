import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePaymentComponent } from './manage-payment.component';

const routes: Routes = [
  {
    path:'',
    component:ManagePaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagePaymentRoutingModule { }
