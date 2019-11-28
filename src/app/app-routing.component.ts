import { Component, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './services/auth';

 const routes: Routes = [
    { path: 'login', loadChildren: './login/login.module#LoginModule'},  
    { path: '', loadChildren: './layout/layout.module#LayoutModule' ,canActivate: [AuthGuard]},
    { path: 'forgotpassword', loadChildren: './forgotpassword/forgotpassword.module#ForgotpasswordModule'},
    { path: 'validateotp', loadChildren: './validateotp/validateotp.module#ValidateotpModule'},
    { path: 'resetpassword', loadChildren: './resetpassword/resetpassword.module#ResetpasswordModule'},
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingComponent {}






