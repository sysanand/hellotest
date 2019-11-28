import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumersAddRoutingModule } from './consumers-add-routing.module';
import { ConsumersAddComponent } from './consumers-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  imports: [
    CommonModule,
    ConsumersAddRoutingModule,FormsModule,ReactiveFormsModule,
    Ng4LoadingSpinnerModule
  ],
  declarations: [ConsumersAddComponent]
})
export class ConsumersAddModule { }
