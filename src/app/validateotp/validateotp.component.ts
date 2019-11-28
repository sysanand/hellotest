import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ChangeDetectorRef, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-validateotp',
  templateUrl: './validateotp.component.html',
  styleUrls: ['./validateotp.component.css']
})
export class ValidateotpComponent implements OnInit {

  forgotForm: FormGroup;
  
  baseURL = environment.baseURL;


  validateUrl: string = this.baseURL + "matrix/otpVerify"
  forgotlist: any;
  otp: any;
  userId: any;
  user_name1: any;
  validateotplist: { "user_name": any; "otp": any; };
  constructor( private fb: FormBuilder, private http: Http, private router: Router, private _location: Location) { }
  // private spinnerService: Ng4LoadingSpinnerService,
  ngOnInit() {
    this.forgotForm = this.fb.group({
      otp: ['']      

    })
  }
  back()
  {
    this.router.navigate(['/login']);
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  forgotpass(x)
  {
      
      this.user_name1 = JSON.parse(localStorage.getItem("user_name"));      
      this.userId = JSON.parse(localStorage.getItem("userId"));
      let headers = new Headers({
        "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
        "Content-Type": "Application/json"
        });
        let options = new RequestOptions({ headers: headers });  
        this.validateotplist={
          "user_name":this.user_name1.user_name,
          "otp":x.otp
          }  
          
      this.http.post(this.validateUrl, this.validateotplist,options)
      .subscribe(data =>{    
      this.forgotlist=data.json().data;
      if(this.forgotlist.error_message=="OTP is wrong try again")
      {
        alert("OTP is wrong try again")
        this.router.navigate(['/forgotpassword'])
      }
      if(this.forgotlist.message=="Otp verified Successfully")
      {
        alert("Otp verified Successfully")
      this.router.navigate(['/resetpassword'])}
      
      });      
  }
}
