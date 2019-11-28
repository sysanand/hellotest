import { Component, OnInit, Inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthGuard } from '../../services/auth';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Location } from '@angular/common';
import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-gps-location-report',
  templateUrl: './gps-location-report.component.html',
  styleUrls: ['./gps-location-report.component.css'],
  providers: [

    { provide: Window, useValue: window }]
})
@Injectable()
export class GpsLocationReportComponent implements OnInit {

  baseURL = environment.baseURL;
  excelURL = environment.excelURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  flag = environment.flag;
  couponSearchForm: FormGroup;
  viewGpsLocationReportListUrl: string = this.baseURL + "matrix/gps";
  exportGpsLocationReportListUrl: string = this.baseURL + "matrix/gpsExport";
  couponReportUrl:string=this.baseURL + "matrix/couponUsage";
  keykjm: any;
  page: number;
  size: number;
  getgpslocationlist: any;
  gpslocationlist: { "keykjm": any; "mobile": any; "paymentType": any; "fromDate": any; "toDate": any; "page": number; "size": number; flag: any; };
  exportlist: { "keykjm": any; "fromDate": any; "toDate": any; "couponType": any; flag: any; };
  getexportlist: any;
  fromDate: any;
  toDate: any;
  couponType: number;
  message: string;
  activitytype: number;
  gpslocationlistexport: { "keykjm": any; "mobile": any; "paymentType": number; "fromDate": any; "toDate": any; "flag": any; };
  phone: number;
  isDesc: boolean;
  column: any;
  companyId = environment.companyid;

  constructor(private fb: FormBuilder, private http: Http, private router: Router, @Inject(Window) private window: Window) { }

  ngOnInit() {
    
    this.couponSearchForm = this.fb.group({     
      couponType: [''],
      fromDate: [''],
      toDate: [''],
    })
    this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
    //alert(this.keykjm);

    //phone: new FormControl(null, [Validators.pattern("[0-9]{0-10}")])
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

  gpslist(x) {
    this.page = 0;
    this.size = 10000;
   
    if (x.couponType == "" || x.couponType == undefined || x.couponType == "") {
      this.couponType = 0;      
    }
    else {
      this.couponType = x.couponType;
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

    let obj={
      "keykjm": this.keykjm,
      "company": this.companyId,
      "couponType": +this.couponType,
      "fromDate": this.fromDate,
      "page": this.page,
      "size": this.size,
      "toDate": this.toDate,
      "subclient": ""
      }

    //alert(JSON.stringify(this.gpslocationlist));
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    if (Date.parse(this.fromDate) > Date.parse(this.toDate)) {
      alert("To date should be greater than From date")
    }

    this.message = "cascas";

    this.http.post(this.couponReportUrl, obj, options)
      .subscribe(data => {
        this.getgpslocationlist = data.json().data.list;
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
    //alert(JSON.stringify(x));
    if (x.phone == "" || x.phone == undefined || x.phone == "") {
      this.phone = 0;
    }
    else{
      this.phone = x.phone;
    }
    if (x.activitytype == "" || x.activitytype == undefined || x.activitytype == "") {
      this.activitytype = 0;
    }
    else {
      this.activitytype = x.activitytype;
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

    this.gpslocationlistexport = {
      "keykjm": this.keykjm,
      "mobile": this.phone,
      "paymentType": this.activitytype,
      "fromDate": this.fromDate,
      "toDate": this.toDate,
      "flag": this.flag
    }
    //alert(JSON.stringify(this.gpslocationlistexport));
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    if (Date.parse(this.fromDate) > Date.parse(this.toDate)) {
      alert("To date should be greater than From date")
    }


    this.http.post(this.exportGpsLocationReportListUrl, this.gpslocationlistexport, options)
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
    this.getgpslocationlist.sort(function (a, b) {
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
