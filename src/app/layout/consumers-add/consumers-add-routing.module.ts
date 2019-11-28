import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumersAddComponent } from './consumers-add.component';

const routes: Routes = [
  {
    path: '',
    component: ConsumersAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumersAddRoutingModule { }
