import { Component, OnInit, Inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-referral-points-redemption-report',
  templateUrl: './referral-points-redemption-report.component.html',
  styleUrls: ['./referral-points-redemption-report.component.css'],
  providers: [
    { provide: Window, useValue: window }]
})
@Injectable()
export class ReferralPointsRedemptionReportComponent implements OnInit {
  datepickerConfig:Partial<BsDatepickerConfig>;

  baseURL = environment.baseURL;
  excelURL = environment.excelURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  companyId = environment.companyid;
  flag = environment.flag;
  referralSearchForm: FormGroup;
  referralRedemptionUrl:string=this.baseURL +"report/refferalPointsRedemption";
  keykjm: any;
  page: number;
  size: number;
  getwalletusagelist: any[];
  search: string;
  fromdate: any;
  todate: any;
  couponRedeemListData: any;
  referralRedeemData: any;
  transactiontypeUrl:string=this.baseURL+"report/paymentType";
  exportUrl:string=this.baseURL+"file/refferalRedemptionExport"
  transactionList: any;
  getTransactionData: any;
  getexportlist: any;
  totalamount: any;
  countItems: any;

  constructor(private fb: FormBuilder, private http: Http, private router: Router, @Inject(Window) private window: Window) { 
    this.datepickerConfig=Object.assign({},
      {
        containerClass:'theme-dark-blue',
        showWeekNumbers:false,
        dateInputFormat:'DD/MM/YYYY',
        
        
      });
  }

  ngOnInit() {
    this.referralSearchForm = this.fb.group({
      fromDate: [''],
      toDate: [''],
      paymentType:[''],
      mobile:[''],
      name:['']
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
      "size": 10,
      "toDate": 0,
      "paymentType":0,
      "name":null,
      "mobile":null
      }

    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.referralRedemptionUrl, obj, options)
      .subscribe(data => {
        this.referralRedeemData = data.json().data.list;
        this.countItems = data.json().data.count;
        this.totalamount=data.json().data.redemptionAmountForReferral
        if (data.json().data.error_code == "397") {
          alert("Session Timeout");
          this.router.navigate(['/login']);
        }
        if (data.json().data.error_code == "393") {
          alert("Session Timeout or Inavlid please try again...");
          this.router.navigate(['/login']);
        }

      });

      this.http.post(this.transactiontypeUrl, {type:0,"keykjm":this.keykjm,}, options).subscribe(data => {
        this.transactionList = data.json();
        // alert(JSON.stringify(this.getStates))
        this.getTransactionData = this.transactionList.data;
        if (data.json().data.error_code == "337") {
          // this.msg = "Your session time out.Please login again"
          // this.openSuccessCancelSwal(this.msg);
          alert("Your session time out.Please login again")
          this.router.navigate(['/login']);
        }
        if (data.json().data.error_code == "336") {
          // this.msg = "Unauthorized Login or Your session time out.Please login again"
          // this.openSuccessCancelSwal(this.msg);
         alert("Unauthorized Login or Your session time out.Please login again")
          this.router.navigate(['/login']);
        }
      })
  }

  usagelist(x,page) {
    if (page > 0) {
      page = page - 1
    } else {
      page = page
    }
    // this.page = 0;
    // this.size = 10000;
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

    if (x.paymentType == "" || x.paymentType == undefined || x.paymentType == "") {
      x.paymentType = 0;      
    }
    else {
      x.paymentType = x.paymentType;
    }
    
    if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
      x.mobile = null;      
    }
    else {
      x.mobile = x.mobile;
    }
    
    if (x.name == "" || x.name == undefined || x.name == "") {
      x.name = null;      
    }
    else {
      x.name = x.name;
    }


    let obj={
      "keykjm": this.keykjm,
      // "company": this.companyId,
      "fromDate": this.fromdate,
      "page": page,
      "size": 10,
      "toDate": this.todate,
      "paymentType":x.paymentType,
      "name":x.name,
      "mobile":x.mobile
      }
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.referralRedemptionUrl, obj, options)
      .subscribe(data => {
        this.countItems = data.json().data.count;
        this.referralRedeemData = data.json().data.list;
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

  // mobilesearch(x) {
  //   // this.page = 0;
  //   // this.size = 10000;
  //   if (x.fromDate == "" || x.fromDate == undefined || x.fromDate == null) {
  //     this.fromdate = 0
  //   }
  //   else {
  //     this.fromdate = Date.parse(x.fromDate)
  //   }
  //   if (x.toDate == "" || x.toDate == undefined || x.toDate == null) {
  //     this.todate = 0
  //   }
  //   else {
  //     this.todate = Date.parse(x.toDate)
  //   }

  //   if (x.paymentType == "" || x.paymentType == undefined || x.paymentType == "") {
  //     x.paymentType = 0;      
  //   }
  //   else {
  //     x.paymentType = x.paymentType;
  //   }
    
  //   if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
  //     x.mobile = null;      
  //   }
  //   else {
  //     x.mobile = x.mobile;
  //   }
    
  //   if (x.name == "" || x.name == undefined || x.name == "") {
  //     x.name = null;      
  //   }
  //   else {
  //     x.name = x.name;
  //   }


  //   let obj={
  //     "keykjm": this.keykjm,
  //     // "company": this.companyId,
  //     "fromDate": this.fromdate,
  //     "page": 0,
  //     "size": 10000,
  //     "toDate": this.todate,
  //     "paymentType":x.paymentType,
  //     "name":x.name,
  //     "mobile":x.mobile
      
  //     }
  //   let headers = new Headers({
  //     "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
  //     "Content-Type": "Application/json"
  //   });
  //   let options = new RequestOptions({ headers: headers });

  //   this.http.post(this.referralRedemptionUrl, obj, options)
  //     .subscribe(data => {
  //       this.referralRedeemData = data.json().data.list;
  //       if (data.json().data.error_code == "397") {
  //         alert("Session Timeout");
  //         this.router.navigate(['/login']);
  //       }
  //       if (data.json().data.error_code == "393") {
  //         alert("Session Timeout or Inavlid please try again...");
  //         this.router.navigate(['/login']);
  //       }

  //     });
  // }

  // customersearch(x){
  //   // this.page = 0;
  //   // this.size = 10000;
  //   if (x.fromDate == "" || x.fromDate == undefined || x.fromDate == null) {
  //     this.fromdate = 0
  //   }
  //   else {
  //     this.fromdate = Date.parse(x.fromDate)
  //   }
  //   if (x.toDate == "" || x.toDate == undefined || x.toDate == null) {
  //     this.todate = 0
  //   }
  //   else {
  //     this.todate = Date.parse(x.toDate)
  //   }

  //   if (x.paymentType == "" || x.paymentType == undefined || x.paymentType == "") {
  //     x.paymentType = 0;      
  //   }
  //   else {
  //     x.paymentType = x.paymentType;
  //   }
    
  //   if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
  //     x.mobile = null;      
  //   }
  //   else {
  //     x.mobile = x.mobile;
  //   }
    
  //   if (x.name == "" || x.name == undefined || x.name == "") {
  //     x.name = null;      
  //   }
  //   else {
  //     x.name = x.name;
  //   }


  //   let obj={
  //     "keykjm": this.keykjm,
  //     // "company": this.companyId,
  //     "fromDate": this.fromdate,
  //     "page": 0,
  //     "size": 10000,
  //     "toDate": this.todate,
  //     "paymentType":x.paymentType,
  //     "name":x.name,
  //     "mobile":x.mobile
  //     }
  //   let headers = new Headers({
  //     "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
  //     "Content-Type": "Application/json"
  //   });
  //   let options = new RequestOptions({ headers: headers });

  //   this.http.post(this.referralRedemptionUrl, obj, options)
  //     .subscribe(data => {
  //       this.referralRedeemData = data.json().data.list;
  //       if (data.json().data.error_code == "397") {
  //         alert("Session Timeout");
  //         this.router.navigate(['/login']);
  //       }
  //       if (data.json().data.error_code == "393") {
  //         alert("Session Timeout or Inavlid please try again...");
  //         this.router.navigate(['/login']);
  //       }

  //     });
  // }

  exportToExcel(x) {
    if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
      x.mobile = null;      
    }
    else {
      x.mobile = x.mobile;
    }
    
    if (x.name == "" || x.name == undefined || x.name == "") {
      x.name = null;      
    }
    else {
      x.name = x.name;
    }
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

    if (x.paymentType == "" || x.paymentType == undefined || x.paymentType == "") {
      x.paymentType = 0;      
    }
    else {
      x.paymentType = x.paymentType;
    }
    if (this.fromdate > this.todate) {
      alert("To date should be greater than From date")
    }else{
      
      let obj={
        "keykjm": this.keykjm,
        // "company": this.companyId,
        "fromDate": this.fromdate,
        "toDate": this.todate,
        "paymentType":x.paymentType,
        "name":x.name,
        "mobile":x.mobile
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
 keyPress(event: any) {
  const pattern = /[0-9]/;

  let inputChar = String.fromCharCode(event.charCode);
  if (event.keyCode != 8 && !pattern.test(inputChar)) {
    event.preventDefault();
  }
}
}
