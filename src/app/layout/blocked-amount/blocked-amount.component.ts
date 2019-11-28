import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Http, RequestOptions ,Headers} from '@angular/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blocked-amount',
  templateUrl: './blocked-amount.component.html',
  styleUrls: ['./blocked-amount.component.css']
})
export class BlockedAmountComponent implements OnInit {
  datepickerConfig:Partial<BsDatepickerConfig>;
  baseURL = environment.baseURL;
  excelURL = environment.excelURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  flag = environment.flag;
  couponSearchForm: FormGroup;
  keykjm: any;
  // consumerRedeemptionUrl:string=this.baseURL+"report/consumerRedemption";
  blockedAmountUrl:string=this.baseURL+"report/blockedAmount";
  statusDropdownUrl:string=this.baseURL+"report/status";
  transactiontypeUrl:string=this.baseURL+"report/paymentType";
  // exportUrl: string=this.baseURL+"file/consumerRedemptionNikitchem";
  exportUrl: string=this.baseURL+"file/blockedAmountExport"
  statusList: any;
  getStatus: any;
  transactionList: any;
  getTransactionData: any;
  countItems: any;
  totalredeemedAmount: any;
  consumerRedeemptionListData: any;
  size: number;
  fromDate: any;
  toDate: any;
  getexportlist: any;
  blockedredeemedAmount: any;
  blockedRedeemptionListData: any;


  constructor(private fb: FormBuilder, private http: Http, private router: Router) {
    this.datepickerConfig=Object.assign({},
      {
        containerClass:'theme-dark-blue',
        showWeekNumbers:false,
        dateInputFormat:'DD/MM/YYYY',
        
        
      });
  }

  ngOnInit() {

    this.couponSearchForm = this.fb.group({     
        status: [''],
        paymentTypeId:[''],
        fromDate: [''],
        toDate: [''],
        consumerName:[''],
        consumerMobile:['']
      })
      this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
     
  
      let headers = new Headers({
        "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
        "Content-Type": "Application/json"
      });
      let options = new RequestOptions({ headers: headers });
  
      // 
      this.http.post( this.statusDropdownUrl, {"keykjm":this.keykjm,}, options).subscribe(data => {
        this.statusList = data.json();
        // alert(JSON.stringify(this.getStates))
        this.getStatus = this.statusList.data;
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
  
     
  
      let obj= {
        "keykjm":this.keykjm,
        "consumerName": null,
        "consumerMobile":null,
        "fromDate": 0,
        "page": 0,
        "paymentTypeId": 0,
        "size": 10,
        "toDate": 0
        }
        
        this.http.post(this.blockedAmountUrl, obj, options)
        .subscribe(data => {
          this.countItems = data.json().data.count;
          this.blockedredeemedAmount = data.json().data.sumBlockedAmount;
          this.blockedRedeemptionListData = data.json().data.list;       
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
  
    consumergetRedeemptionList(x, page) {
      if (page > 0) {
        page = page - 1
      } else {
        page = page
      }
      // this.page = 0;
      this.size = 10000;
     
      if (x.paymentTypeId == "" || x.paymentTypeId == undefined || x.paymentTypeId == "") {
        x.paymentTypeId = 0;      
      }
      else {
        x.paymentTypeId = x.paymentTypeId;
      }
      // if (x.status == "" || x.status == undefined || x.status == "") {
      //   x.status = null;      
      // }
      // else {
      //   x.status = x.status;
      // }
      if (x.consumerName == "" || x.consumerName == undefined || x.consumerName == "") {
          x.consumerName = null;      
        }
        else {
          x.consumerName = x.consumerName;
        }
        if (x.consumerMobile == "" || x.consumerMobile == undefined || x.consumerMobile == "") {
          x.consumerMobile = null;      
        }
        else {
          x.consumerMobile = x.consumerMobile;
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
        "keykjm":this.keykjm,
        // "company": this.companyId,
        "paymentTypeId": +x.paymentTypeId,
        "fromDate": this.fromDate,
        "page": page,
        "size": 10,
        "toDate": this.toDate,
        "consumerMobile":x.consumerMobile,
        "consumerName":x.consumerName
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
  
      this.http.post(this.blockedAmountUrl, obj, options)
        .subscribe(data => {
          this.countItems = data.json().data.count;
          this.blockedRedeemptionListData = data.json().data.list;
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
  
    mobilesearch(x, page) {
      if (page > 0) {
        page = page - 1
      } else {
        page = page
      }
      // this.page = 0;
      this.size = 10000;
     
      if (x.paymentTypeId == "" || x.paymentTypeId == undefined || x.paymentTypeId == "") {
        x.paymentTypeId = 0;      
      }
      else {
        x.paymentTypeId = x.paymentTypeId;
      }
      if (x.consumerName == "" || x.consumerName == undefined || x.consumerName == "") {
        x.consumerName = null;      
      }
      else {
        x.consumerName = x.consumerName;
      }
      if (x.consumerMobile == "" || x.consumerMobile == undefined || x.consumerMobile == "") {
        x.consumerMobile = null;      
      }
      else {
        x.consumerMobile = x.consumerMobile;
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
        "keykjm":this.keykjm,
        // "company": this.companyId,
        "paymentTypeId": +x.paymentTypeId,
        "fromDate": this.fromDate,
        "page": 0,
        "size": 10000,
        "toDate": this.toDate,
        "consumerMobile":x.consumerMobile,
        "consumerName":x.consumerName
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
  
      this.http.post(this.blockedAmountUrl, obj, options)
        .subscribe(data => {
          this.countItems = data.json().data.count;
          this.blockedRedeemptionListData = data.json().data.list;
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
  
    customersearch(x, page) {
      if (page > 0) {
        page = page - 1
      } else {
        page = page
      }
      // this.page = 0;
      this.size = 10000;
     
      if (x.paymentTypeId == "" || x.paymentTypeId == undefined || x.paymentTypeId == "") {
        x.paymentTypeId = 0;      
      }
      else {
        x.paymentTypeId = x.paymentTypeId;
      }
      if (x.consumerName == "" || x.consumerName == undefined || x.consumerName == "") {
        x.consumerName = null;      
      }
      else {
        x.consumerName = x.consumerName;
      }
      if (x.consumerMobile == "" || x.consumerMobile == undefined || x.consumerMobile == "") {
        x.consumerMobile = null;      
      }
      else {
        x.consumerMobile = x.consumerMobile;
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
        "keykjm":this.keykjm,
        // "company": this.companyId,
        "paymentTypeId": +x.paymentTypeId,
        "fromDate": this.fromDate,
        "page": 0,
        "size": 10000,
        "toDate": this.toDate,
        "consumerMobile":x.consumerMobile,
        "consumerName":x.consumerName
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
  
      this.http.post(this.blockedAmountUrl, obj, options)
        .subscribe(data => {
          this.countItems = data.json().data.count;
          this.blockedRedeemptionListData = data.json().data.list;
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
      if (x.paymentTypeId == "" || x.paymentTypeId == undefined || x.paymentTypeId == "") {
        x.paymentTypeId = 0;      
      }
      else {
        x.paymentTypeId = x.paymentTypeId;
      }
      if (x.consumerName == "" || x.consumerName == undefined || x.consumerName == "") {
        x.consumerName = null;      
      }
      else {
        x.consumerName = x.consumerName;
      }
      if (x.consumerMobile == "" || x.consumerMobile == undefined || x.consumerMobile == "") {
        x.consumerMobile = null;      
      }
      else {
        x.consumerMobile = x.consumerMobile;
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
      }else{
  
  
        let obj={
          "keykjm":this.keykjm,
          "paymentTypeId": +x.paymentTypeId,
          "fromDate": this.fromDate,
          "toDate": this.toDate,
          "consumerName":x.consumerName,
          "consumerMobile":x.consumerMobile
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
