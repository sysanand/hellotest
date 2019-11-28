import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetpasswordRoutingModule } from './resetpassword-routing.module';
import { ResetpasswordComponent } from './resetpassword.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
@NgModule({
  imports: [
    CommonModule,
    ResetpasswordRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  declarations: [ResetpasswordComponent]
})
export class ResetpasswordModule { }
