import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigSettingsComponent } from './config-settings.component';

const routes: Routes = [
  {
    path:'',
    component:ConfigSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigSettingsRoutingModule { }
