import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingComponent } from './app-routing.component';
import { FormsModule ,ReactiveFormsModule}    from '@angular/forms';
import { NgModel } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';  
import { RouterLink } from '@angular/router';
import { AuthGuard } from './services/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,CommonModule,
    AppRoutingComponent,
    HttpModule,
    FormsModule,
    ReactiveFormsModule, 
     BrowserAnimationsModule
  ],  
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
providers: [AuthGuard,
  // {provide: LocationStrategy, useClass: HashLocationStrategy}   
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
