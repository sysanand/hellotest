import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
   
    CommonModule,
    HeaderRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  declarations: [HeaderComponent]
})
export class HeaderModule { }
