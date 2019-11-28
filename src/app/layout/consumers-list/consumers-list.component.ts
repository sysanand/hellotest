import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consumers-list',
  templateUrl: './consumers-list.component.html',
  styleUrls: ['./consumers-list.component.css']
})
export class ConsumersListComponent implements OnInit {


  baseURL = environment.baseURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  excelURL = environment.excelURL;
  companyId = environment.companyid;
  GpsLocationForm: FormGroup;
  getConsumerslist: any;
  // consumersListUrl: string = this.baseURL+"nikit/consumersList";
  // exportUrl: string = this.baseURL+"file/nikitConsumerListExport"
  consumersListUrl: string = "nikit/consumersList";
  exportUrl: string = this.baseURL + "file/nikitConsumerListExport"

  keykjm: any;
  customersCount: any;
  getexportlist: any;
  totalcount: any;
  kycStatus: any;
  constructor(public fb: FormBuilder, public http: Http, public router: Router) { }

  ngOnInit() {
    
   
    this.keykjm = JSON.parse(localStorage.getItem("keykjm"));

    if (localStorage.getItem('statusFilter') == null) {
      this.kycStatus = 0;
    }
     else {
      this.kycStatus = localStorage.getItem('statusFilter');

    }
    
    

    this.GpsLocationForm = this.fb.group({
      mobile: [''],
      status: [''],
      name: ['']
    })


    let obj = {
      "keykjm": this.keykjm,
      "page": 0,
      "size": 1000,
      "status": "",
      "kycStatus": this.kycStatus,
      "mobile": null,
      "name": null,
      "companyId": this.companyId
    }

    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.baseURL + this.consumersListUrl, obj, options)
      .subscribe(data => {
        this.customersCount = data.json().data.totalConsumerCount;
        this.totalcount = data.json().data.count
        this.getConsumerslist = data.json().data.list;
        if (data.json().data.error_code == "397") {
          alert("Session Timeout");
          this.router.navigate(['/login']);
        }
        if (data.json().data.error_code == "393") {
          alert("Session Timeout or Invalid please try again...");
          this.router.navigate(['/login']);
        }

      });

  }

  searchlist(x) {
    // alert(p)
    // alert(x.phone)
    if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
      x.mobile = null;
    } else {
      x.mobile = x.mobile;
    }
    if (x.name == null || x.name == undefined || x.name == "") {
      x.name = null;
    } else {
      x.name = x.name;
    }

    if (x.status == "" || x.status == undefined || x.status == "") {
      x.status = null;
    }
    else {
      x.status = x.status;
    }

    // this.page = 0;
    // this.size = 10000;
    // this.company = this.companyId;
    // this.search = x.phone;

    let obj = {
      "keykjm": this.keykjm,
      "page": 0,
      "size": 100000,
      "status": x.status,
      "kycStatus": 0,
      "mobile": x.mobile,
      "name": x.name,
      "companyId": this.companyId
    }



    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.baseURL + this.consumersListUrl, obj, options)
      .subscribe(data => {
        this.customersCount = data.json().data.totalConsumerCount;

        this.getConsumerslist = data.json().data.list;
        if (data.json().data.error_code == "397") {
          alert("Session Timeout");
          this.router.navigate(['/login']);
        }
        if (data.json().data.error_code == "393") {
          alert("Session Timeout or Invalid please try again...");
          this.router.navigate(['/login']);
        }

      });
  }


  mobilesearch(x) {


    if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
      x.mobile = null;
    }
    else {
      x.mobile = x.mobile;
    }

    if (x.name == "" || x.name == undefined || x.name == null) {
      x.name = null;
    }
    else {
      x.name = x.name;
    }
    if (x.status == "" || x.status == undefined || x.status == "") {
      x.status = null;
    }
    else {
      x.status = x.status;
    }

    let obj = {
      "keykjm": this.keykjm,
      "page": 0,
      "size": 100000,
      "mobile": x.mobile,
      "name": x.name,
      "kycStatus": 0,
      "status": x.status,

    }


    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.baseURL + this.consumersListUrl, obj, options)
      .subscribe(data => {
        this.customersCount = data.json().data.totalConsumerCount;

        this.getConsumerslist = data.json().data.list;
        if (data.json().data.error_code == "397") {
          alert("Session Timeout");
          this.router.navigate(['/login']);
        }
        if (data.json().data.error_code == "393") {
          alert("Session Timeout or Invalid please try again...");
          this.router.navigate(['/login']);
        }

      });
  }


  customersearch(x) {


    if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
      x.mobile = null;
    }
    else {
      x.mobile = x.mobile;
    }

    if (x.name == "" || x.name == undefined || x.name == null) {
      x.name = null;
    }
    else {
      x.name = x.name;
    }

    if (x.status == "" || x.status == undefined || x.status == "") {
      x.status = null;
    }
    else {
      x.status = x.status;
    }

    let obj = {
      "keykjm": this.keykjm,
      "page": 0,
      "size": 100000,
      "mobile": x.mobile,
      "name": x.name,
      "kycStatus": 0,
      "status": x.status,

    }


    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.baseURL + this.consumersListUrl, obj, options)
      .subscribe(data => {
        this.customersCount = data.json().data.totalConsumerCount;
        this.getConsumerslist = data.json().data.list;
        if (data.json().data.error_code == "397") {
          alert("Session Timeout");
          this.router.navigate(['/login']);
        }
        if (data.json().data.error_code == "393") {
          alert("Session Timeout or Invalid please try again...");
          this.router.navigate(['/login']);
        }

      });
  }

  all(x) {

    this.kycStatus = 0;
    localStorage.setItem('statusFilter', '0')

    if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
      x.mobile = null;
    }
    else {
      x.mobile = x.mobile;
    }

    if (x.name == "" || x.name == undefined || x.name == null) {
      x.name = null;
    }
    else {
      x.name = x.name;
    }
    if (x.status == "" || x.status == undefined || x.status == "") {
      x.status = null;
    }
    else {
      x.status = x.status;
    }

    let obj = {
      "keykjm": this.keykjm,
      "page": 0,
      "size": 100000,
      "mobile": x.mobile,
      "name": x.name,
      "kycStatus": this.kycStatus,
      "status": x.status,

    }


    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.baseURL + this.consumersListUrl, obj, options)
      .subscribe(data => {
        this.customersCount = data.json().data.totalConsumerCount;

        this.getConsumerslist = data.json().data.list;
        if (data.json().data.error_code == "397") {
          alert("Session Timeout");
          this.router.navigate(['/login']);
        }
        if (data.json().data.error_code == "393") {
          alert("Session Timeout or Invalid please try again...");
          this.router.navigate(['/login']);
        }

      });
  }

  pending(x) {
    this.kycStatus = 12;
    localStorage.setItem('statusFilter', '12')

    if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
      x.mobile = null;
    }
    else {
      x.mobile = x.mobile;
    }

    if (x.name == "" || x.name == undefined || x.name == null) {
      x.name = null;
    }
    else {
      x.name = x.name;
    }
    if (x.status == "" || x.status == undefined || x.status == "") {
      x.status = null;
    }
    else {
      x.status = x.status;
    }

    let obj = {
      "keykjm": this.keykjm,
      "page": 0,
      "size": 100000,
      "mobile": x.mobile,
      "name": x.name,
      "kycStatus": this.kycStatus,
      "status": x.status,

    }


    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.baseURL + this.consumersListUrl, obj, options)
      .subscribe(data => {
        this.customersCount = data.json().data.totalConsumerCount;

        this.getConsumerslist = data.json().data.list;
        if (data.json().data.error_code == "397") {
          alert("Session Timeout");
          this.router.navigate(['/login']);
        }
        if (data.json().data.error_code == "393") {
          alert("Session Timeout or Invalid please try again...");
          this.router.navigate(['/login']);
        }

      });
  }

  approve(x) {

    this.kycStatus = 11;
    localStorage.setItem('statusFilter', '11')

    if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
      x.mobile = null;
    }
    else {
      x.mobile = x.mobile;
    }

    if (x.name == "" || x.name == undefined || x.name == null) {
      x.name = null;
    }
    else {
      x.name = x.name;
    }
    if (x.status == "" || x.status == undefined || x.status == "") {
      x.status = null;
    }
    else {
      x.status = x.status;
    }

    let obj = {
      "keykjm": this.keykjm,
      "page": 0,
      "size": 100000,
      "mobile": x.mobile,
      "name": x.name,
      "kycStatus": this.kycStatus,
      "status": x.status,

    }


    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.baseURL + this.consumersListUrl, obj, options)
      .subscribe(data => {
        this.customersCount = data.json().data.totalConsumerCount;

        this.getConsumerslist = data.json().data.list;
        if (data.json().data.error_code == "397") {
          alert("Session Timeout");
          this.router.navigate(['/login']);
        }
        if (data.json().data.error_code == "393") {
          alert("Session Timeout or Invalid please try again...");
          this.router.navigate(['/login']);
        }

      });
  }

  reject(x) {

    this.kycStatus = 13;
    localStorage.setItem('statusFilter', '13')

    if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
      x.mobile = null;
    }
    else {
      x.mobile = x.mobile;
    }

    if (x.name == "" || x.name == undefined || x.name == null) {
      x.name = null;
    }
    else {
      x.name = x.name;
    }
    if (x.status == "" || x.status == undefined || x.status == "") {
      x.status = null;
    }
    else {
      x.status = x.status;
    }

    let obj = {
      "keykjm": this.keykjm,
      "page": 0,
      "size": 100000,
      "mobile": x.mobile,
      "name": x.name,
      "kycStatus": this.kycStatus,
      "status": x.status,

    }


    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.baseURL + this.consumersListUrl, obj, options)
      .subscribe(data => {
        this.customersCount = data.json().data.totalConsumerCount;

        this.getConsumerslist = data.json().data.list;
        if (data.json().data.error_code == "397") {
          alert("Session Timeout");
          this.router.navigate(['/login']);
        }
        if (data.json().data.error_code == "393") {
          alert("Session Timeout or Invalid please try again...");
          this.router.navigate(['/login']);
        }

      });
  }

  incomplete(x) {

    this.kycStatus = 10;
    localStorage.setItem('statusFilter', '10')

    if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
      x.mobile = null;
    }
    else {
      x.mobile = x.mobile;
    }

    if (x.name == "" || x.name == undefined || x.name == null) {
      x.name = null;
    }
    else {
      x.name = x.name;
    }
    if (x.status == "" || x.status == undefined || x.status == "") {
      x.status = null;
    }
    else {
      x.status = x.status;
    }

    let obj = {
      "keykjm": this.keykjm,
      "page": 0,
      "size": 100000,
      "mobile": x.mobile,
      "name": x.name,
      "kycStatus": this.kycStatus,
      "status": x.status,

    }


    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.baseURL + this.consumersListUrl, obj, options)
      .subscribe(data => {
        this.customersCount = data.json().data.totalConsumerCount;

        this.getConsumerslist = data.json().data.list;
        if (data.json().data.error_code == "397") {
          alert("Session Timeout");
          this.router.navigate(['/login']);
        }
        if (data.json().data.error_code == "393") {
          alert("Session Timeout or Invalid please try again...");
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

    if (x.name == "" || x.name == undefined || x.name == null) {
      x.name = null;
    }
    else {
      x.name = x.name;
    }

    if (x.status == "" || x.status == undefined || x.status == "") {
      x.status = null;
    }
    else {
      x.status = x.status;
    }

    let obj = {
      "keykjm": this.keykjm,
      "kycStatus": 0,
      "mobile": x.mobile,
      "name": x.name,
      "status": x.status,


    }

    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.exportUrl, obj, options)
      .subscribe(data => {
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


  keyPress(event: any) {
    const pattern = /[0-9]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  editConsumer(consumerId) {
    localStorage.setItem('consumerId', consumerId)
    this.router.navigate(['/consumers-edit'])
  }



}
