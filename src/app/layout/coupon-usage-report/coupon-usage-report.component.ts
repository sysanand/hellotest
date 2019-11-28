import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-coupon-usage-report',
  templateUrl: './coupon-usage-report.component.html',
  styleUrls: ['./coupon-usage-report.component.css'],
  providers: [

    { provide: Window, useValue: window }]
})
@Injectable()
export class CouponUsageReportComponent implements OnInit {
  datepickerConfig: Partial<BsDatepickerConfig>;



  baseURL = environment.baseURL;
  excelURL = environment.excelURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  flag = environment.flag;
  companyId = environment.companyid;

  scannedCouponForm: FormGroup;
  scannedCouponAmountUrl: string = this.baseURL + "nikit/scannedCouponAmountNikit";
  keykjm: any;
  page: number;
  size: number;
  fromDate: any;
  toDate: any;
  couponType: number;
  message: string;
  couponUsagelist: any;
  exportUrl: string = this.baseURL + "file/scannedCouponAmountExport";
  getexportlist: any;
  scannedCouponAmountlist: any;
  totalscannedcoupon: any;
  countItems: any;

  constructor(private fb: FormBuilder, private http: Http, private router: Router, @Inject(Window) private window: Window) {
    this.datepickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat: 'DD/MM/YYYY',


      });
  }

  ngOnInit() {
    this.scannedCouponForm = this.fb.group({
      fromDate: [''],
      toDate: [''],
      name: [''],
      mobile: ['']

    })
    this.keykjm = JSON.parse(localStorage.getItem("keykjm"));

    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });



    let obj = {

      "keykjm": this.keykjm,
      "page": 0,
      "size": 10,
      "toDate": 0,
      "fromDate": 0,
      "name": "",
      "mobile": "",

    }

    this.http.post(this.scannedCouponAmountUrl, obj, options)
      .subscribe(data => {
        this.countItems = data.json().data.count;
        this.totalscannedcoupon = data.json().data.totalScannedCoupon
        this.scannedCouponAmountlist = data.json().data.list;
        //alert(JSON.stringify(this.getgpslocationlist));  
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
  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }

  keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  scannedCouponList(x, page) {
    if (page > 0) {
      page = page - 1
    } else {
      page = page
    }
    // this.page = 0;
    // this.size = 10000;

    if (x.mobile == "" || x.mobile == undefined || x.mobile == null) {
      x.mobile = null;
    }
    else {
      x.mobile = x.mobile;
    }


    if (x.fromDate == "" || x.fromDate == undefined || x.fromDate == "") {
      this.fromDate = 0
    }
    else {
      this.fromDate = Date.parse(x.fromDate)
    }
    if (x.toDate == "" || x.toDate == undefined || x.toDate == "") {
      this.toDate = 0
    }
    else {
      this.toDate = Date.parse(x.toDate)
    }
    if (x.name == "" || x.name == undefined || x.name == null) {
      x.name = null;
    }
    else {
      x.name = x.name;
    }

    let obj = {
      "keykjm": this.keykjm,
      "fromDate": this.fromDate,
      "page": page,
      "size": 10,
      "toDate": this.toDate,
      "mobile": x.mobile,
      "name": x.name,

    }

    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    if (Date.parse(this.fromDate) > Date.parse(this.toDate)) {
      alert("To date should be greater than From date")
    }

    this.http.post(this.scannedCouponAmountUrl, obj, options)
      .subscribe(data => {
        this.scannedCouponAmountlist = data.json().data.list;
        this.countItems = data.json().data.count;
        //alert(JSON.stringify(this.getgpslocationlist));  
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


    if (x.fromDate == "" || x.fromDate == undefined || x.fromDate == "") {
      this.fromDate = 0
    }
    else {
      this.fromDate = Date.parse(x.fromDate)
    }
    if (x.toDate == "" || x.toDate == undefined || x.toDate == "") {
      this.toDate = 0
    }
    else {
      this.toDate = Date.parse(x.toDate)
    }

    if (this.fromDate > this.toDate) {
      alert("To date should be greater than From date")
    } else {

      let obj = {
        "keykjm": this.keykjm,
        "mobile": x.mobile,
        "fromDate": this.fromDate,
        "toDate": this.toDate,
        "name": x.name,

      }

      let headers = new Headers({
        "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
        "Content-Type": "Application/json"
      });
      let options = new RequestOptions({ headers: headers });

      this.http.post(this.exportUrl, obj, options)
        .subscribe(data => {
          // {"data":"ConsumerDetails190621144835635.xlsx","status":"success"}
          if (data.json().status == "success") {
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
  // mobilesearch(x, page) {
  //   // if (page > 0) {
  //   //   page = page - 1
  //   // } else {
  //   //   page = page
  //   // }
  //   // this.page = 0;
  //   // this.size = 10000;

  //   if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
  //     x.mobile = null;
  //   }
  //   else {
  //     x.mobile = x.mobile;
  //   }


  //   if (x.fromDate == "" || x.fromDate == undefined || x.fromDate == "") {
  //     this.fromDate = 0
  //   }
  //   else {
  //     this.fromDate = Date.parse(x.fromDate)
  //   }
  //   if (x.toDate == "" || x.toDate == undefined || x.toDate == "") {
  //     this.toDate = 0
  //   }
  //   else {
  //     this.toDate = Date.parse(x.toDate)
  //   }
  //   if (x.name == "" || x.name == undefined || x.name == null) {
  //     x.name = null;
  //   }
  //   else {
  //     x.name = x.name;
  //   }

  //   let obj = {
  //     "keykjm": this.keykjm,
  //     "fromDate": this.fromDate,
  //     "page": 0,
  //     "size": 100000,
  //     "toDate": this.toDate,
  //     "mobile": x.mobile,
  //     "name": x.name,

  //   }

  //   let headers = new Headers({
  //     "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
  //     "Content-Type": "Application/json"
  //   });
  //   let options = new RequestOptions({ headers: headers });

  //   if (Date.parse(this.fromDate) > Date.parse(this.toDate)) {
  //     alert("To date should be greater than From date")
  //   }

  //   this.http.post(this.scannedCouponAmountUrl, obj, options)
  //     .subscribe(data => {
  //       this.scannedCouponAmountlist = data.json().data.list;
  //       //alert(JSON.stringify(this.getgpslocationlist));  
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
  // customersearch(x) {
  //   // if (page > 0) {
  //   //   page = page - 1
  //   // } else {
  //   //   page = page
  //   // }
  //   // this.page = 0;
  //   // this.size = 10000;

  //   if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
  //     x.mobile = null;
  //   }
  //   else {
  //     x.mobile = x.mobile;
  //   }


  //   if (x.fromDate == "" || x.fromDate == undefined || x.fromDate == "") {
  //     this.fromDate = 0
  //   }
  //   else {
  //     this.fromDate = Date.parse(x.fromDate)
  //   }
  //   if (x.toDate == "" || x.toDate == undefined || x.toDate == "") {
  //     this.toDate = 0
  //   }
  //   else {
  //     this.toDate = Date.parse(x.toDate)
  //   }
  //   if (x.name == "" || x.name == undefined || x.name == null) {
  //     x.name = null;
  //   }
  //   else {
  //     x.name = x.name;
  //   }

  //   let obj = {
  //     "keykjm": this.keykjm,
  //     "fromDate": this.fromDate,
  //     "page": 0,
  //     "size": 100000,
  //     "toDate": this.toDate,
  //     "mobile": x.mobile,
  //     "name": x.name,

  //   }

  //   let headers = new Headers({
  //     "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
  //     "Content-Type": "Application/json"
  //   });
  //   let options = new RequestOptions({ headers: headers });

  //   if (Date.parse(this.fromDate) > Date.parse(this.toDate)) {
  //     alert("To date should be greater than From date")
  //   }

  //   this.http.post(this.scannedCouponAmountUrl, obj, options)
  //     .subscribe(data => {
  //       this.scannedCouponAmountlist = data.json().data.list;
  //       //alert(JSON.stringify(this.getgpslocationlist));  
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
}
