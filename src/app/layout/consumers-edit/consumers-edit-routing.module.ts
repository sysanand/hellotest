import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumersEditComponent } from './consumers-edit.component';

const routes: Routes = [
  {
    path:'',
    component:ConsumersEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumersEditRoutingModule { }
