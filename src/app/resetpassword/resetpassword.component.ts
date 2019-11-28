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
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  resetForm: FormGroup;
  
  baseURL = environment.baseURL;


  resetUrl: string = this.baseURL + "consumer/password"
  forgotlist: any;
  otp: any;
  userId: any;
  resetlist: { "newPassword": any; "userId": any; "isConsumerLogin": any; };
  constructor( private fb: FormBuilder, private http: Http, private router: Router, private _location: Location) { }
  // private spinnerService: Ng4LoadingSpinnerService,
  ngOnInit() {
    // this.otp = JSON.parse(localStorage.getItem("OTP"));
    this.userId = JSON.parse(localStorage.getItem("userId"));
    this.resetForm = this.fb.group({
      newPassword: [''],      
      confirmpassword: [''],   
    })
  }
  back()
  {
    this.router.navigate(['/login']);
  }
  reset(x)
  {
      // alert(JSON.stringify(x));
      x.userId=this.userId;
      x.isConsumerLogin=false;
      // x.isConsumerLogin=false;
      if(x.newPassword==x.confirmpassword)
      {
      let headers = new Headers({
        "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
        "Content-Type": "Application/json"
        });
        let options = new RequestOptions({ headers: headers });    
      // UserServicesUrl:string=this.baseURL + 'user/userlist/' + (page_no - 1) + '/' + this.page_size + '/' + this.roleId + '/' + this.city + '/' + this.state + '/' + search,
      this.resetlist={
        "newPassword":x.newPassword,
        "userId":x.userId,
        "isConsumerLogin":x.isConsumerLogin
      }
      this.http.post(this.resetUrl,this.resetlist,options)
      .subscribe(data =>{    
      this.forgotlist=data.json().data;
      // alert(JSON.stringify(data.json().data.list));  
      if(data.json().data.error_code=="397")
    {
      alert("Session Timeout");
      this.router.navigate(['/login']);
    }
    if(data.json().data.error_code=="393")
    {
      alert("Session Timeout or Inavlid please try again...");
      this.router.navigate(['/login']);
    }
      if( data.json().status=="success")
      {
            alert("Password changed successfully...")
            // localStorage.setItem("OTP", JSON.stringify(this.forgotlist.otp));
            localStorage.setItem("userId", JSON.stringify(this.forgotlist.userId));
            // localStorage.clear();
            this.router.navigate(['/login']);
            
      }  
      // alert(JSON.stringify( this.forgotlist))
      });
    }
    else
    {
      alert("New Password doesn't match with Confirm Password")
    }
  }
}
