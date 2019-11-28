import { Component, OnInit, Inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-coupon-redemption-report',
  templateUrl: './coupon-redemption-report.component.html',
  styleUrls: ['./coupon-redemption-report.component.css'],
  providers: [
    { provide: Window, useValue: window }]
})
@Injectable()
export class CouponRedemptionReportComponent implements OnInit {
  baseURL = environment.baseURL;
  excelURL = environment.excelURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  companyId = environment.companyid;
  flag = environment.flag;
  couponRedeemForm: FormGroup;
  getCouponRedeemUrl:string=this.baseURL +"report/couponRedemption";
  keykjm: any;
  page: number;
  size: number;
  getwalletusagelist: any[];
  search: string;
  fromdate: any;
  todate: any;
  couponRedeemListData: any;
  exportUrl: string =this.baseURL+"file/couponRedemptionNikitchem";
  getexportlist: any;
  constructor(private fb: FormBuilder, private http: Http, private router: Router, @Inject(Window) private window: Window) { }

  ngOnInit() {
    this.couponRedeemForm = this.fb.group({
      fromDate: [''],
      toDate: [''],
      
    })
    this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
    this.page = 0;
    this.size = 10000;
    this.fromdate = 0;
    this.todate = 0;

    let obj={
      "keykjm": this.keykjm,
      // "company": this.companyId,
      "fromDate": 0,
      "page": 0,
      "size": 10000,
      "subclient": "",
      "toDate": 0
      }

    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.getCouponRedeemUrl, obj, options)
      .subscribe(data => {
        this.couponRedeemListData = data.json().data;
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

  usagelist(x) {
    this.page = 0;
    this.size = 10000;
    if (x.fromDate == "" || x.fromDate == undefined || x.fromDate == null) {
      this.fromdate = 0
    }
    else {
      this.fromdate = Date.parse(x.fromDate)
    }
    if (x.toDate == "" || x.toDate == undefined || x.toDate == null) {
      this.todate = 0
    }
    else {
      this.todate = Date.parse(x.toDate)
    }

    let obj={
      "keykjm": this.keykjm,
      // "company": this.companyId,
      "fromDate": this.fromdate,
      "page": this.page,
      "size": this.size,
      "subclient": "",
      "toDate": this.todate
      }
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.getCouponRedeemUrl, obj, options)
      .subscribe(data => {
        this.couponRedeemListData = data.json().data;
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

  exportToExcel(x) {
    if (x.fromDate == "" || x.fromDate == undefined || x.fromDate == null) {
      this.fromdate = 0
    }
    else {
      this.fromdate = Date.parse(x.fromDate)
    }
    if (x.toDate == "" || x.toDate == undefined || x.toDate == null) {
      this.todate = 0
    }
    else {
      this.todate = Date.parse(x.toDate)
    }

    if (this.fromdate > this.todate) {
      alert("To date should be greater than From date")
    }else{
      let obj={
        "keykjm": this.keykjm,
        "fromDate": this.fromdate,
        "toDate": this.todate,
        }
     
     let headers = new Headers({
       "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
       "Content-Type": "Application/json"
     });
     let options = new RequestOptions({ headers: headers });
  
     
  
     this.http.post(this.exportUrl, obj, options)
       .subscribe(data => {
        // {"data":"ConsumerDetails190621144835635.xlsx","status":"success"}
        if(data.json().status == "success"){
          this.getexportlist = data.json().data;
          window.open(this.excelURL + "report/" + this.getexportlist, '_blank');
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
 
}
