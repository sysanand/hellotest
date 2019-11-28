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
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotForm: FormGroup;

  baseURL = environment.baseURL;
  companyID = environment.companyid;

  forgotUrl: string = this.baseURL + "matrix/forgotPass"
  forgotlist: any;
  constructor(private fb: FormBuilder, private http: Http, private router: Router, private _location: Location) { }
  // private spinnerService: Ng4LoadingSpinnerService,
  ngOnInit() {
    this.forgotForm = this.fb.group({
      user_name: ['']

    })
  }
  back() {
    this.router.navigate(['/login']);
  }
  forgotpass(x) {    
    localStorage.setItem("user_name", JSON.stringify(x));
    //x.isConsumerLogin=false;
    x.company = this.companyID;
    //alert(JSON.stringify(x));
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.forgotUrl, x, options)
      .subscribe(data => {
        this.forgotlist = data.json().data;
        // alert(JSON.stringify(data.json().data.list));  
        if (data.json().data.error_code == "397") {
          alert("Session Timeout");
          this.router.navigate(['/login']);
        }
        if (data.json().data.error_code == "393") {
          alert("Session Timeout or Inavlid please try again...");
          this.router.navigate(['/login']);
        }
        if (data.json().status == "success") {
          alert("OTP is sent to your Mobile.Please check now")
          localStorage.setItem("userId", JSON.stringify(this.forgotlist.userId));
          this.router.navigate(['/validateotp']);
        }
        if (data.json().data.error_message == "Invalid UserName!") {
          alert("Invalid Email ID")
        }
      });
  }
}