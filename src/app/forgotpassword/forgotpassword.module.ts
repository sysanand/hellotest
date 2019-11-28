import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotpasswordRoutingModule } from './forgotpassword-routing.module';
import { ForgotpasswordComponent } from './forgotpassword.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
@NgModule({
  imports: [
    CommonModule,
    ForgotpasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ForgotpasswordComponent]
})
export class ForgotpasswordModule { }
