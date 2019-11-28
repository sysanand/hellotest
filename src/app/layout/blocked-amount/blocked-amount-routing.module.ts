import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockedAmountComponent } from './blocked-amount.component';

const routes: Routes = [
  {
    path:'',
    component:BlockedAmountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockedAmountRoutingModule { }
