import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import{BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-manage-payment',
  templateUrl: './manage-payment.component.html',
  styleUrls: ['./manage-payment.component.css']
})
export class ManagePaymentComponent implements OnInit {
  datepickerConfig:Partial<BsDatepickerConfig>;
  baseURL = environment.baseURL;
  excelURL = environment.excelURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  flag = environment.flag;
  keykjm: any;
  // transactiontypeUrl:string=this.baseURL+"report/paymentType";
  transactiontypeUrl:string=this.baseURL+"base/entity/PaymentType/findAll"
  totalPaymentReceivedUrl:string=this.baseURL+"nikit/totalPaymentReceivedNikitchem";
  exportUrl:string=this.baseURL+"file/nikitPaymentReceivedExport"
  transactionList: any;
  getTransactionData: any;
  managepaymentForm: FormGroup;
  totalPaymentReceivedListData: any;
  countItems: any;
  fromDate: any;
  toDate: any;
  size: number;
  getexportlist: any;
  totalpaymentreceived: any;

  
  constructor(private fb: FormBuilder,private http: Http, private router: Router) {
    this.datepickerConfig=Object.assign({},
      {
        containerClass:'theme-dark-blue',
        showWeekNumbers:false,
        dateInputFormat:'DD/MM/YYYY',
        
        
      });
    
   }

  ngOnInit() {

    this.managepaymentForm = this.fb.group({     
     
      paymentType:[''],
      fromDate: [''],
      toDate: [''],
    })

    this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
   
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });
    this.http.get(this.transactiontypeUrl,options).subscribe(data => {
      this.transactionList = data.json();
      // alert(JSON.stringify(this.getStates))
      this.getTransactionData = this.transactionList.data;
            // alert(JSON.stringify(this.getTransactionData))

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
      "fromDate": 0,
      "page": 0,
      "paymentTypeId": 0,
      "size": 10,
      "toDate": 0
      }
      this.http.post(this.totalPaymentReceivedUrl, obj, options)
      .subscribe(data => {
        this.countItems = data.json().data.count;
        this.totalpaymentreceived = data.json().data.paymentReceived;
        this.totalPaymentReceivedListData = data.json().data.businessJournals;       
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

  managepaymentList(x, page) {
    // alert(x.fromDate)
    if (page > 0) {
      page = page - 1
    } else {
      page = page
    }
    // this.page = 0;
    // this.size = 10000;
   
    if (x.paymentType == "" || x.paymentType == undefined || x.paymentType == "") {
      x.paymentType = 0;      
    }
    else {
      x.paymentType = x.paymentType;
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
      "paymentTypeId": +x.paymentType,
      "fromDate": this.fromDate,
      "page": page,
      "size": 10,
      "toDate": this.toDate,
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

    this.http.post(this.totalPaymentReceivedUrl, obj, options)
      .subscribe(data => {
        this.countItems = data.json().data.count;
        this.totalpaymentreceived = data.json().data.paymentReceived;
        this.totalPaymentReceivedListData = data.json().data.businessJournals;
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
    if (x.paymentType == "" || x.paymentType == undefined || x.paymentType == "") {
      x.paymentType = 0;      
    }
    else {
      x.paymentType = x.paymentType;
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
        "paymentTypeId": +x.paymentType,
        "fromDate": this.fromDate,
        "toDate": this.toDate
     
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
