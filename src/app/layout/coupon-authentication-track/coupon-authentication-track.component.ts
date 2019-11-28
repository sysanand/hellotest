import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-coupon-authentication-track',
  templateUrl: './coupon-authentication-track.component.html',
  styleUrls: ['./coupon-authentication-track.component.css']
})
export class CouponAuthenticationTrackComponent implements OnInit {
  keykjm: any;
  couponCode: string;

  baseURL = environment.baseURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  companyId = environment.companyid;
  getTrackUsageView: any;
  getTrackUsageUrl:string="couponorder/getAuthentDetailList/"
  constructor(public http: Http, public router: Router) { }

  ngOnInit() {
    this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
    this.couponCode = localStorage.getItem('couponCode');

    // let obj = {
    //   "keykjm": this.keykjm,
    // }

    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });
    this.http.get(this.baseURL + this.getTrackUsageUrl+this.couponCode, options)
      .subscribe(data => {
        this.getTrackUsageView = data.json().data.trackCoupon;
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
