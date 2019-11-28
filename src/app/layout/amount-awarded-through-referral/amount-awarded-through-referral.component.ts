import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { environment } from 'src/environments/environment';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amount-awarded-through-referral',
  templateUrl: './amount-awarded-through-referral.component.html',
  styleUrls: ['./amount-awarded-through-referral.component.css']
})
export class AmountAwardedThroughReferralComponent implements OnInit {
  datepickerConfig: Partial<BsDatepickerConfig>;
  amountawardedreferralForm: FormGroup;
  keykjm: any;
  baseURL = environment.baseURL;
  excelURL = environment.excelURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  flag = environment.flag;
  amountAwardedThroughRefferalListUrl: string = this.baseURL + "nikit/amountAwardedThroughRefferal";
  exportUrl: string = this.baseURL + "file/nikitAmountAwardedThroughRefferalExport"
  amountAwardedListData: any;
  fromDate: any;
  toDate: any;
  size: number;
  getexportlist: any;
  totalamountAwardedThroughRefferal: any;
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
    this.amountawardedreferralForm = this.fb.group({
      fromDate: [''],
      toDate: [''],
      mobile: [''],
      name: ['']
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
      "toDate": 0,
      "page": 0,
      "size": 10,
      "mobile": null,
      "name": null


    }

    this.http.post(this.amountAwardedThroughRefferalListUrl, obj, options)
      .subscribe(data => {
        this.countItems = data.json().data.count;
        this.amountAwardedListData = data.json().data.list;
        this.totalamountAwardedThroughRefferal=data.json().data.amountAwardedThroughRefferal
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

  amountawardedList(x, page) {

    if (page > 0) {
      page = page - 1
    } else {
      page = page
    }
    // this.page = 0;
    // this.size = 10000;

    if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
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

    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    let obj = {
      "keykjm": this.keykjm,
      "fromDate": this.fromDate,
      "toDate": this.toDate,
      "page": page,
      "size": 10,
      "mobile": x.mobile,
      "name": x.name,

    }

    this.http.post(this.amountAwardedThroughRefferalListUrl, obj, options)
      .subscribe(data => {
        this.countItems = data.json().data.count;
        this.amountAwardedListData = data.json().data.list;
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

  //   this.http.post(this.amountAwardedThroughRefferalListUrl, obj, options)
  //     .subscribe(data => {
  //       this.amountAwardedListData = data.json().data.list;
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
  // customersearch(x, page) {
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

  //   this.http.post(this.amountAwardedThroughRefferalListUrl, obj, options)
  //     .subscribe(data => {
  //       this.amountAwardedListData = data.json().data.list;
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

  keyPress(event: any) {
    const pattern = /[0-9]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
