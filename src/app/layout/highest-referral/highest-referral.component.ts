import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Http, RequestOptions,Headers } from '@angular/http';

@Component({
  selector: 'app-highest-referral',
  templateUrl: './highest-referral.component.html',
  styleUrls: ['./highest-referral.component.css']
})
export class HighestReferralComponent implements OnInit {
  baseURL = environment.baseURL;
  excelURL = environment.excelURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  flag = environment.flag;
  highestRefferalUrl:string=this.baseURL+"nikit/highestReferredConsumerList"
  exportUrl:string=this.baseURL+"file/nikitHighestRefferalConsumerExport"
  keykjm: any;
  highestRefferalListData: any;
  countItems: any;
  getexportlist: any;

  constructor(private fb: FormBuilder,private http: Http, private router: Router) { }

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
      "size": 100000,
      }
      this.http.post(this.highestRefferalUrl, obj, options)
      .subscribe(data => {
        this.countItems = data.json().data.count; 
        this.highestRefferalListData = data.json().data.list; 
        // alert(JSON.stringify(this.highestRefferalListData))      
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
      "consumerId": +localStorage.getItem('consumerId'),
    }
    
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.exportUrl, obj, options)
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

  view(consumerId){
    localStorage.setItem('consumerId', consumerId)
    this.router.navigate(["/highest-referral-detailsview"]);
  }

}
