import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-highest-referral-detailsview',
  templateUrl: './highest-referral-detailsview.component.html',
  styleUrls: ['./highest-referral-detailsview.component.css']
})
export class HighestReferralDetailsviewComponent implements OnInit {
  baseURL = environment.baseURL;
  excelURL = environment.excelURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  flag = environment.flag;
  keykjm: any;
  highestRefferalViewUrl: string = this.baseURL+"nikit/highestReferredConsumerView";
  exportUrl:string=this.baseURL+"file/highestRefferalConsumerViewExport"
  countItems: any;
  highestRefferalViewListData: any;
  getexportlist: any;
  constructor(private http: Http, private router: Router) { }

  ngOnInit() {

    this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    let obj = {
      "keykjm": this.keykjm,
      "consumerId": +localStorage.getItem('consumerId'),
      "page": 0,
      "size": 100000,
    }
    this.http.post(this.highestRefferalViewUrl, obj, options)
      .subscribe(data => {
        this.countItems = data.json().data.count;
        this.highestRefferalViewListData = data.json().data.list;
        // alert(JSON.stringify(this.highestRefferalViewListData))
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

}
