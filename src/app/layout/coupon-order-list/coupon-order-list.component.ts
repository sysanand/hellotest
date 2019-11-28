import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon-order-list',
  templateUrl: './coupon-order-list.component.html',
  styleUrls: ['./coupon-order-list.component.css']
})
export class CouponOrderListComponent implements OnInit {
  // redeemableListUrl:string="couponorder/getRedeemAndAuthentList/";
  searchListUrl: string = "nikit/getCouponOrderList";
  baseURL = environment.baseURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  companyId = environment.companyid;
  keykjm: any;
  getRedeemlist: any;
  getAuthenticationlist: any;
  couponSearch: FormGroup;
  constructor(public http: Http, public router: Router,private fb:FormBuilder) { }

  ngOnInit() {

    this.couponSearch = this.fb.group({
      orderId:[''],
      couponId:['']
    })

    this.keykjm = JSON.parse(localStorage.getItem("keykjm"));

    let obj = {
      "keykjm": this.keykjm,
      "page": 0,
      "size": 1000,
      "search": null,
      "couponCode": ""
      //"company": this.companyId
    }

    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.baseURL + this.searchListUrl, obj, options)
      .subscribe(data => {
        this.getRedeemlist = data.json().data.RedeemableList;
        this.getAuthenticationlist = data.json().data.AutenticationList
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

  search(x) {

    if (x.orderId == null|| x.orderId == undefined || x.orderId == "") {
          x.orderId = null;      
        }
        else {
          x.orderId = x.orderId;
        }
        if (x.couponId == null|| x.couponId == undefined || x.couponId == "") {
          x.couponId = null;      
        }
        else {
          x.couponId = x.couponId;
        }

    let obj = {
      "keykjm": this.keykjm,
      "search": x.orderId,
      "couponCode": x.couponId,
      "page": 0,
      "size": 10000

    }

    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });


    this.http.post(this.baseURL + this.searchListUrl, obj, options)
      .subscribe(data =>{
        this.getRedeemlist = data.json().data.RedeemableList;
        this.getAuthenticationlist = data.json().data.AutenticationList
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

  // searchCoupon(x) {

  //   if (x.orderId == null|| x.orderId == undefined || x.orderId == "") {
  //         x.orderId = null;      
  //       }
  //       else {
  //         x.orderId = x.orderId;
  //       }
  //       if (x.couponId == null|| x.couponId == undefined || x.couponId == "") {
  //         x.couponId = null;      
  //       }
  //       else {
  //         x.couponId = x.couponId;
  //       }


  //   let obj = {
  //     "keykjm": this.keykjm,
  //     "search": x.orderId,
  //     "couponCode": x.couponId,
  //     "page": 0,
  //     "size": 10000

  //   }

  //   let headers = new Headers({
  //     "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
  //     "Content-Type": "Application/json"
  //   });
  //   let options = new RequestOptions({ headers: headers });


  //   this.http.post(this.baseURL + this.searchListUrl, obj, options)
  //     .subscribe(data =>{
  //       this.getRedeemlist = data.json().data.RedeemableList;
  //     this.getAuthenticationlist = data.json().data.AutenticationList
  //     if (data.json().data.error_code == "397") {
  //       alert("Session Timeout");
  //       this.router.navigate(['/login']);
  //     }
  //     if (data.json().data.error_code == "393") {
  //       alert("Session Timeout or Inavlid please try again...");
  //       this.router.navigate(['/login']);
  //     }

  //   });
  // }


  viewRedeemOrder(orderId) {
    localStorage.setItem('orderId', orderId);
    this.router.navigate(['/coupon-order-view'])
  }

  viewAuthenticationOrder(orderId) {
    localStorage.setItem('orderId', orderId);
    this.router.navigate(['/coupon-authentication-order-view'])

  }
}
