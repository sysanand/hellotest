import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-consumer-referral-report',
  templateUrl: './consumer-referral-report.component.html',
  styleUrls: ['./consumer-referral-report.component.css'],
  providers: [

    { provide: Window, useValue: window }]
})
@Injectable()
export class ConsumerReferralReportComponent implements OnInit {
  datepickerConfig: Partial<BsDatepickerConfig>;
  baseURL = environment.baseURL;
  excelURL = environment.excelURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  flag = environment.flag;
  referralSearchForm: FormGroup;
  page: number;
  size: number;
  fromDate: any;
  toDate: any;
  companyId = environment.companyid;
  // consumerRefferalReportUrl:string=this.baseURL+"report/consumerRefferalReport";
  consumerRefferalReportUrl: string = this.baseURL + "nikit/totalConsumerThroughRefferalNikit";
  statusDropdownUrl: string = this.baseURL + "report/status";
  transactiontypeUrl: string = this.baseURL + "report/paymentType";
  refferalNameSearch:string=this.baseURL+"nikit/nameSearch";
  statusList: any;
  getStatus: any;
  transactionList: any;
  getTransactionData: any;
  keykjm: any;
  consumerRefferalListData: any;
  exportUrl: string = this.baseURL + "file/nikittotalConsumerThroughRefferalExport";
  getexportlist: any;
  refferalname: any;
  totalConsumersthroughreferraldata: any;
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

    this.referralSearchForm = this.fb.group({
      // status: [''],
      mobile: [''],
      name: [''],
      fromDate: [''],
      toDate: [''],
    })
    this.keykjm = JSON.parse(localStorage.getItem("keykjm"));


    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });


    let obj = {
      "mobile": null,
      "fromDate": 0,
      "toDate": 0,
      "page": 0,
      "size": 10,
      "name":null,
      "keykjm": this.keykjm
    }

    this.http.post(this.consumerRefferalReportUrl, obj, options) 
      .subscribe(data => {
        this.countItems = data.json().data.count;
        this.consumerRefferalListData = data.json().data.list;
        this.totalConsumersthroughreferraldata=data.json().data.totalConsumersthroughreferral
        // alert(JSON.stringify(this.consumerRefferalListData))
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

  consumergetRedeemptionList(x,page) {
    if (page > 0) {
      page = page - 1
    } else {
      page = page
    }
    this.size = 10000;

    // this.page = 0;
    // this.size = 10000;
    //  alert(x.mobile)
    if (x.name == null|| x.name == undefined || x.name == "") {
      x.name = null;      
    }
    else {
      x.name = x.name;
    }
    if (x.mobile == null|| x.mobile == undefined || x.mobile == "") {
      x.mobile = null;      
    }
    else {
      x.mobile = x.mobile;
    }
    
   

    if (x.fromDate == null || x.fromDate == undefined || x.fromDate == "") {
      this.fromDate = 0
    }
    else {
      this.fromDate = Date.parse(x.fromDate)
    }
    if (x.toDate == null || x.toDate == undefined || x.toDate == "") {
      this.toDate = 0
    }
    else {
      this.toDate = Date.parse(x.toDate)
    }

    let obj = {
      
        "mobile": x.mobile,
        "fromDate": this.fromDate,
        "toDate": this.toDate,
        "page": page,
        "size": 10,
        "name":x.name,
        "keykjm": this.keykjm
      
    }
   
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    if (Date.parse(this.fromDate) > Date.parse(this.toDate)) {
      alert("To date should be greater than From date")
    }

    // this.message = "cascas";

    this.http.post(this.consumerRefferalReportUrl, obj, options) 
    .subscribe(data => {
      this.countItems = data.json().data.count;
      this.consumerRefferalListData = data.json().data.list;
      this.totalConsumersthroughreferraldata=data.json().data.totalConsumersthroughreferral
      // alert(JSON.stringify(this.consumerRefferalListData))
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
  //   // this.size = 10000;
  //   if (x.name == null|| x.name == undefined || x.name == "") {
  //     x.name = null;      
  //   }
  //   else {
  //     x.name = x.name;
  //   }
  //   if (x.mobile == null|| x.mobile == undefined || x.mobile == "") {
  //     x.mobile = null;      
  //   }
  //   else {
  //     x.mobile = x.mobile;
  //   }
   

  //   if (x.fromDate == null || x.fromDate == undefined || x.fromDate == "") {
  //     this.fromDate = 0
  //   }
  //   else {
  //     this.fromDate = Date.parse(x.fromDate)
  //   }
  //   if (x.toDate == null || x.toDate == undefined || x.toDate == "") {
  //     this.toDate = 0
  //   }
  //   else {
  //     this.toDate = Date.parse(x.toDate)
  //   }

  //   let obj = {
      
  //     "mobile": x.mobile,
  //     "fromDate": this.fromDate,
  //     "toDate": this.toDate,
  //     "page": page,
  //     "size": 10,
  //     "name":x.name,
  //     "keykjm": this.keykjm
    
  // }
 
  //   let headers = new Headers({
  //     "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
  //     "Content-Type": "Application/json"
  //   });
  //   let options = new RequestOptions({ headers: headers });

  //   if (Date.parse(this.fromDate) > Date.parse(this.toDate)) {
  //     alert("To date should be greater than From date")
  //   }

  //   // this.message = "cascas";

  //   this.http.post(this.consumerRefferalReportUrl, obj, options) 
  //   .subscribe(data => {
  //     this.countItems = data.json().data.count;
  //     this.consumerRefferalListData = data.json().data.list;
  //     this.totalConsumersthroughreferraldata=data.json().data.totalConsumersthroughreferral
  //     // alert(JSON.stringify(this.consumerRefferalListData))
  //     if (data.json().data.error_code == "397") {
  //       alert("Session Timeout");
  //       this.router.navigate(['/login']);
  //     }
  //     if (data.json().data.error_code == "393") {
  //       alert("Session Timeout or Inavlid please try again...");
  //       this.router.navigate(['/login']);
  //     }
  //   });
  // }

  // referralname(x,page){
  //   if (page > 0) {
  //     page = page - 1
  //   } else {
  //     page = page
  //   }
  //   this.size = 10000;
  //   if (x.name == null|| x.name == undefined || x.name == "") {
  //     x.name = null;      
  //   }
  //   else {
  //     x.name = x.name;
  //   }
  //   if (x.mobile == null|| x.mobile == undefined || x.mobile == "") {
  //     x.mobile = null;      
  //   }
  //   else {
  //     x.mobile = x.mobile;
  //   }
   
   

  //   if (x.fromDate == null|| x.fromDate == undefined || x.fromDate == "") {
  //     this.fromDate = 0
  //   }
  //   else {
  //     this.fromDate = Date.parse(x.fromDate)
  //   }
  //   if (x.toDate == null || x.toDate == undefined || x.toDate == "") {
  //     this.toDate = 0
  //   }
  //   else {
  //     this.toDate = Date.parse(x.toDate)
  //   }

  //   let obj = {
  //     "mobile": x.mobile,
  //     "fromDate": this.fromDate,
  //     "toDate": this.toDate,
  //     "page": page,
  //     "size": 10,
  //     "name":x.name,
  //     "keykjm": this.keykjm
  //   }


  //   let headers = new Headers({
  //     "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
  //     "Content-Type": "Application/json"
  //   });
  //   let options = new RequestOptions({ headers: headers });

  //   this.http.post(this.consumerRefferalReportUrl, obj, options) 
  //   .subscribe(data => {
  //     this.countItems = data.json().data.count;
  //     this.consumerRefferalListData = data.json().data.list;
  //     this.totalConsumersthroughreferraldata=data.json().data.totalConsumersthroughreferral
  //     // alert(JSON.stringify(this.consumerRefferalListData))
  //     if (data.json().data.error_code == "397") {
  //       alert("Session Timeout");
  //       this.router.navigate(['/login']);
  //     }
  //     if (data.json().data.error_code == "393") {
  //       alert("Session Timeout or Inavlid please try again...");
  //       this.router.navigate(['/login']);
  //     }
  //   });

      
  // }
  exportToExcel(x) {

    if (x.mobile == "" || x.mobile == undefined || x.mobile == null || x.mobile == 0) {
      x.mobile = null;
    }
    else {
      x.mobile = x.mobile;
    }
    if (x.name == "" || x.name == undefined || x.name == null || x.name == 0) {
      x.name = null;
    }
    else {
      x.name = x.name;
    }
    if (x.fromDate == "" || x.fromDate == undefined || x.fromDate == null) {
      this.fromDate = 0
    }
    else {
      this.fromDate = Date.parse(x.fromDate)
    }
    if (x.toDate == "" || x.toDate == undefined || x.toDate == null) {
      this.toDate = 0
    }
    else {
      this.toDate = Date.parse(x.toDate)
    }
    if (this.fromDate > this.toDate) {
      alert("To date should be greater than From date")
    } else {
      let obj = {
        "keykjm":this.keykjm,
        "fromDate":this.fromDate,
        "toDate":this.toDate,
        "mobile":x.mobile,
        "name":x.name
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

}
