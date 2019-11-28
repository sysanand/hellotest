import { Component, OnInit, Inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-customer-wallet-usage-report',
  templateUrl: './customer-wallet-usage-report.component.html',
  styleUrls: ['./customer-wallet-usage-report.component.css'],
  providers: [
    { provide: Window, useValue: window }]
})
@Injectable()
export class CustomerWalletUsageReportComponent implements OnInit {

  baseURL = environment.baseURL;
  excelURL = environment.excelURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  companyId = environment.companyid;
  flag = environment.flag;
  WalletUsageForm: FormGroup;
  SearchForm: FormGroup;
  viewWalletUsageReportListUrl: string = this.baseURL + "matrix/customerRedemption";
  exportWalletUsageReportListUrl: string = this.baseURL + "matrix/customerRedemptionExport";
  keykjm: any;
  page: number;
  size: number;
  getwalletusagelist: any[];
  search: string;
  fromdate: any;
  todate: any;
  walletusagelist: { "keykjm": string; "fromDate": any; "toDate": any; "page": number; "size": number; "flag": any; "search": any; };
  userinput: { "keykjm": any; "fromDate": any; "toDate": any; "page": number; "size": number; "flag": any; "search": any; };
  walletusagelistview: { "keykjm": any; "fromDate": any; "toDate": any; "page": number; "size": number; "flag": any; "search": any; };
  walletusagelistviewexport: { "keykjm": any; "fromDate": any; "toDate": any; "flag": any; "search": any; };
  getexportlist: any;
  isDesc: boolean;
  column: any;
  getCouponRedeemUrl:string=this.baseURL +"matrix/redemptionReport"

  constructor(private fb: FormBuilder, private http: Http, private router: Router, @Inject(Window) private window: Window) { }

  ngOnInit() {
    this.WalletUsageForm = this.fb.group({
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
      "company": this.companyId,
      "fromDate": 0,
      "page": 0,
      "size": 10,
      "subclient": "",
      "toDate": 0
      }

    //alert(JSON.stringify(this.walletusagelist));
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.getCouponRedeemUrl, obj, options)
      .subscribe(data => {
        this.getwalletusagelist = data.json().data;
        // if (data.json().data.error_code == "397") {
        //   alert("Session Timeout");
        //   this.router.navigate(['/login']);
        // }
        // if (data.json().data.error_code == "393") {
        //   alert("Session Timeout or Inavlid please try again...");
        //   this.router.navigate(['/login']);
        // }

      });
  }

  usagelist(x) {
    // this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
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

    // this.walletusagelistview = {
    //   "keykjm": this.keykjm,
    //   "fromDate": this.fromdate,
    //   "toDate": this.todate,
    //   "page": this.page,
    //   "size": this.size,
    //   "flag": this.flag,
    //   "search": null
    // }

    let obj={
      "keykjm": this.keykjm,
      "company": this.companyId,
      "fromDate": this.fromdate,
      "page": this.page,
      "size": this.size,
      "subclient": "",
      "toDate": this.todate
      }

    //alert(JSON.stringify(this.walletusagelistview));
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.getCouponRedeemUrl, obj, options)
      .subscribe(data => {
        this.getwalletusagelist = data.json().data;
        // if (data.json().data.error_code == "397") {
        //   alert("Session Timeout");
        //   this.router.navigate(['/login']);
        // }
        // if (data.json().data.error_code == "393") {
        //   alert("Session Timeout or Inavlid please try again...");
        //   this.router.navigate(['/login']);
        // }

      });
  }

  searchlist(x) {

    if (x.search == null || x.search == undefined || x.search == "") {
      this.search = null;
    }
    else {
      this.search = x.search;
    }
    
    this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
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
    // this.fromdate = 0;
    // this.todate = 0;
    this.userinput = {
      "keykjm": this.keykjm,
      "fromDate": this.fromdate,
      "toDate": this.todate,
      "page": this.page,
      "size": this.size,
      "flag": this.flag,
      "search": this.search 
    }
    //alert(JSON.stringify(this.walletusagelist));
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.viewWalletUsageReportListUrl, this.userinput, options)
      .subscribe(data => {
        this.getwalletusagelist = data.json().data;
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
   // alert(JSON.stringify(x));

    if (x.search == null || x.search == undefined || x.search == "") {
      this.search = null;
    }
    else{
      this.search = x.search;
    }   
     

    this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
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

    this.walletusagelistviewexport = {
      "keykjm": this.keykjm,
      "fromDate": this.fromdate,
      "toDate": this.todate,
      "flag": this.flag,
      "search": this.search
    }
    
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    if (Date.parse(this.fromdate) > Date.parse(this.todate)) {
      alert("To date should be greater than From date")
    }

    this.http.post(this.exportWalletUsageReportListUrl, this.walletusagelistviewexport, options)
      .subscribe(data => {
        this.getexportlist = data.json().data;
        window.open(this.excelURL + "report/" + this.getexportlist, '_blank');
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

  sort(property) {   
    this.isDesc = !this.isDesc; //change the direction   
    this.column = property;    
    let direction = this.isDesc ? 1 : -1;    
    this.getwalletusagelist.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;        
      }
      else if (a[property] > b[property]) {
        return 1 * direction;       
      }
      else {
        return 0;       
      }    
    });
  };
}
