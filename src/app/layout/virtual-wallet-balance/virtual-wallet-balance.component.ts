import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http ,Response, RequestOptions, Headers} from '@angular/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { json } from 'd3';


@Component({
  selector: 'app-virtual-wallet-balance',
  templateUrl: './virtual-wallet-balance.component.html',
  styleUrls: ['./virtual-wallet-balance.component.css']
})
export class VirtualWalletBalanceComponent implements OnInit {
  keykjm: any;
  baseURL = environment.baseURL;
  excelURL = environment.excelURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  flag = environment.flag;
  vitualBalanceUrl:string=this.baseURL+"nikit/vitualBalanceNikit";
  exportVirtualWalletUsageReportListUrl: string=this.baseURL+"file/nikitVirtualWalletBalanceExport";

  vitualBalanceListData: any;
  vitualBalance: any;
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
      "size": 10000,     
      }
      this.http.post(this.vitualBalanceUrl, obj, options)
      .subscribe(data => {
        this.vitualBalance = data.json().data.virtualBalance;
        this.vitualBalanceListData = data.json().data.list; 
        // alert(JSON.stringify(this.vitualBalanceListData))      
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
    this.http.post(this.exportVirtualWalletUsageReportListUrl, obj, options)
      .subscribe(data => {
      //{"data":"ClearWalletBalanceNikit1910171039421042.xlsx","status":"success"}
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
