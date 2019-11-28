import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumersListComponent } from './consumers-list.component';

const routes: Routes = [
  {
    path:'',
    component:ConsumersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumersListRoutingModule { }
