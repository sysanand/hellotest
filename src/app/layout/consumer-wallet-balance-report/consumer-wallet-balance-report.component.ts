import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { environment } from '../../../environments/environment';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consumer-wallet-balance-report',
  templateUrl: './consumer-wallet-balance-report.component.html',
  styleUrls: ['./consumer-wallet-balance-report.component.css']
})
export class ConsumerWalletBalanceReportComponent implements OnInit {
  datepickerConfig: Partial<BsDatepickerConfig>;
  baseURL = environment.baseURL;
  excelURL = environment.excelURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  flag = environment.flag;
  consumerWalletBalanceUrl: string = this.baseURL + "nikit/consumerWalletReport";
  exportUrl: string = this.baseURL + "file/nikitConsumerWalletExport";
  keykjm: any;
  consumerwalletbalanceForm: FormGroup;
  consumerWalletBalanceListData: any;
  consumerWalletamount: any;
  page: number;
  size: number;
  fromDate: any;
  toDate: any;
  getexportlist: any;
  countItems: any;

  constructor(private fb: FormBuilder, private http: Http, private router: Router) {
    this.datepickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat: 'DD/MM/YYYY',

      });
  }

  ngOnInit() {

    this.consumerwalletbalanceForm = this.fb.group({
      // status: [''],
      mobile: [''],
      fromDate: [''],
      toDate: [''],
      consumerName: ['']
    })

    this.keykjm = JSON.parse(localStorage.getItem("keykjm"));


    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });
    let obj = {
      "keykjm": this.keykjm,
      "fromDate": 0,
      "page": 0,
      "mobile": "",
      "consumerName": "",
      "size": 1000,
      "toDate": 0
    }


    this.http.post(this.consumerWalletBalanceUrl, obj, options)
      .subscribe(data => {
        this.countItems = data.json().data.count;
        this.consumerWalletamount = data.json().data.ConsumerWalletamount;
        this.consumerWalletBalanceListData = data.json().data.list;
        // alert(JSON.stringify(this.consumerWalletBalanceListData))     
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


  consumerwalletBalanceList(x,page) {
    // alert(x.fromDate)
    if (page > 0) {
      page = page - 1
    } else {
      page = page
    }
    // this.page = 0;
    // this.size = 10000;

    if (x.mobile == "" || x.mobile == undefined || x.mobile == "") {
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
    if (x.consumerName == "" || x.consumerName == undefined || x.consumerName == null) {
      x.consumerName = null;
    }
    else {
      x.consumerName = x.consumerName;
    }

    let obj = {
      "keykjm": this.keykjm,
      "fromDate": this.fromDate,
      "page": page,
      "size": 10,
      "toDate": this.toDate,
      "mobile": x.mobile,
      "consumerName": x.consumerName,

    }
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    if (Date.parse(this.fromDate) > Date.parse(this.toDate)) {
      alert("To date should be greater than From date")
    }

    this.http.post(this.consumerWalletBalanceUrl, obj, options)
      .subscribe(data => {
        this.countItems = data.json().data.count;
        this.consumerWalletBalanceListData = data.json().data.list;
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


  // mobilesearch(x, page) {
  //   // if (page > 0) {
  //   //   page = page - 1
  //   // } else {
  //   //   page = page
  //   // }
  //   // this.page = 0;
  //   // this.size = 10000;

  //   if (x.mobile == "" || x.mobile == undefined || x.mobile == "") {
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
  //   if (x.consumerName == "" || x.consumerName == undefined || x.consumerName == null) {
  //     x.consumerName = null;
  //   }
  //   else {
  //     x.consumerName = x.consumerName;
  //   }

  //   let obj = {
  //     "keykjm": this.keykjm,
  //     "fromDate": this.fromDate,
  //     "page": 0,
  //     "size": 100000,
  //     "toDate": this.toDate,
  //     "mobile": x.mobile,
  //     "consumerName": x.consumerName,

  //   }
  //   let headers = new Headers({
  //     "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
  //     "Content-Type": "Application/json"
  //   });
  //   let options = new RequestOptions({ headers: headers });

  //   if (Date.parse(this.fromDate) > Date.parse(this.toDate)) {
  //     alert("To date should be greater than From date")
  //   }

  //   // this.message = "cascas";

  //   this.http.post(this.consumerWalletBalanceUrl, obj, options)
  //     .subscribe(data => {
  //       this.consumerWalletBalanceListData = data.json().data.list;
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

  // consumersearch(x, page) {
  //   // if (page > 0) {
  //   //   page = page - 1
  //   // } else {
  //   //   page = page
  //   // }
  //   // this.page = 0;
  //   // this.size = 10000;

  //   if (x.mobile == "" || x.mobile == undefined || x.mobile == "") {
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
  //   if (x.consumerName == "" || x.consumerName == undefined || x.consumerName == null) {
  //     x.consumerName = null;
  //   }
  //   else {
  //     x.consumerName = x.consumerName;
  //   }

  //   let obj = {
  //     "keykjm": this.keykjm,
  //     "fromDate": this.fromDate,
  //     "page": 0,
  //     "size": 100000,
  //     "toDate": this.toDate,
  //     "mobile": x.mobile,
  //     "consumerName": x.consumerName,

  //   }
  //   let headers = new Headers({
  //     "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
  //     "Content-Type": "Application/json"
  //   });
  //   let options = new RequestOptions({ headers: headers });

  //   if (Date.parse(this.fromDate) > Date.parse(this.toDate)) {
  //     alert("To date should be greater than From date")
  //   }

  //   // this.message = "cascas";

  //   this.http.post(this.consumerWalletBalanceUrl, obj, options)
  //     .subscribe(data => {
  //       this.consumerWalletBalanceListData = data.json().data.list;
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
    if (x.consumerName == "" || x.consumerName == undefined || x.consumerName == "") {
      x.consumerName = null;
    }
    else {
      x.consumerName = x.consumerName;
    }
    if (x.mobile == "" || x.mobile == undefined || x.mobile == "") {
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

    if (this.fromDate > this.toDate) {
      alert("To date should be greater than From date")
    } else {

      let obj = {
        "keykjm": this.keykjm,
        "mobile": x.mobile,
        "fromDate": this.fromDate,
        "toDate": this.toDate,
        "consumerName": x.consumerName,

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

  keyPress(event: any) {
    const pattern = /[0-9]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
