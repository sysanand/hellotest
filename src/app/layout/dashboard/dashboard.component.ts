import { Component, OnInit, Inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { LocalStorage } from 'ngx-store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] 
})


export class DashboardComponent implements OnInit {
  baseURL = environment.baseURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  companyId = environment.companyid;

  dashboardForm: FormGroup;
  flag = environment.flag;
  DashboardUrl: string = this.baseURL + "nikit/dashboard";
  keykjm: any;
  DashboardData: any;
  sessionkey: { "keykjm": any; };
  
  constructor(private fb: FormBuilder, private http: Http, private router: Router) { }

 ngOnInit() {
  this.dashboardForm = this.fb.group({
    
  })
  this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
  
  // this.sessionkey = {
  //   "keykjm": this.keykjm
  // }
 
  let obj={
    // "companyId":this.companyId
    "keykjm": this.keykjm
    }

  let headers = new Headers({
    "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
    "Content-Type": "Application/json"
  });
  let options = new RequestOptions({ headers: headers });

  this.http.post(this.DashboardUrl, obj, options)
      .subscribe(data => {
        if( data.json().status === "success")
        {
        this.DashboardData = data.json().data;
        }
        else
        {
          this.DashboardData = {
            "paytmAmount": "",
            "bankTransfer": "",
            "totalCoupons": "",
            "rechargeAmount": "",
            "totalConsumer": "",
            "coupounSccaned": "",
            "waletBalance": "",
            "dthAmount": "",
            "totalAmountReceived": ""
          } 
        }     
        if (data.json().data.error_code == "397") {
          alert("Session Timeout");
          this.router.navigate(['/login']);
        }
        if (data.json().data.error_code == "393") {
          alert("Session Timeout or Inavlid please try again...");
          this.router.navigate(['/login']);
        }

      });
  }
}
