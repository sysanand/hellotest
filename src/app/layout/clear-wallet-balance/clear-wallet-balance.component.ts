import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http,Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-clear-wallet-balance',
  templateUrl: './clear-wallet-balance.component.html',
  styleUrls: ['./clear-wallet-balance.component.css']
})
export class ClearWalletBalanceComponent implements OnInit {
  keykjm: any;
  baseURL = environment.baseURL;
  excelURL = environment.excelURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  flag = environment.flag;
  clearBalanceUrl:string=this.baseURL+"nikit/clearBalanceNikit";
  exportClearWalletUsageReportListUrl: string=this.baseURL+"file/nikitClearWalletBalanceExport";

  clearBalance: any;
  clearBalanceListData: any;
  getexportlist: any;
  constructor(private http: Http,private router: Router) { }

  ngOnInit() { 
    this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    let obj= {
      "keykjm":this.keykjm,
      "page": 0,     
      "size": 10,     
      }
      this.http.post(this.clearBalanceUrl, obj, options)
      .subscribe(data => {
        this.clearBalance = data.json().data.clearWalletBalance;
        this.clearBalanceListData = data.json().data.list; 
        // alert(JSON.stringify(this.clearBalanceListData))      
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

  exportToExcel() {
    let obj = {
      "keykjm": this.keykjm,
    }
    
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.exportClearWalletUsageReportListUrl, obj, options)
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
