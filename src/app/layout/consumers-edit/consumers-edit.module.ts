import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumersEditRoutingModule } from './consumers-edit-routing.module';
import { ConsumersEditComponent } from './consumers-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  imports: [
    CommonModule,
    ConsumersEditRoutingModule,ReactiveFormsModule,FormsModule,Ng4LoadingSpinnerModule
  ],
  declarations: [ConsumersEditComponent]
})
export class ConsumersEditModule { }
