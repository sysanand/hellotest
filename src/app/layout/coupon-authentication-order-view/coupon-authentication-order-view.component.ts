import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-coupon-authentication-order-view',
  templateUrl: './coupon-authentication-order-view.component.html',
  styleUrls: ['./coupon-authentication-order-view.component.css']
})
export class CouponAuthenticationOrderViewComponent implements OnInit {

 // getAuthenticationUrl: string = "couponorder/getAuthenticationList/";
 getAuthenticationUrl:string="nikit/getAuthenticationListView"
  couponInactiveUrl: string = "couponorder/updateCouponStatus";
  activateCouponUrl:string="couponorder/activateCoupon";
  baseURL = environment.baseURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  companyId = environment.companyid;
  keykjm: any;
  getAuthenticationlist: any;
  orderId: string;
  getRedeemView: any;
  list: any = [];
  getAuthenticationView: any;
  acticeCouponsForm: FormGroup;
  couponSearch: FormGroup;
  msg: any;
  couponsCount: any;

  constructor(public http: Http, public router: Router,public fb: FormBuilder) { }

  ngOnInit() {

    this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
    this.orderId = localStorage.getItem('orderId');
    this.listofCoupons();

    this.couponSearch = this.fb.group({
      couponId:['']
    })
    
    this.acticeCouponsForm = this.fb.group({
      "keykjm": this.keykjm,
      "orderId": this.orderId,
      "couponCount": ['']
    })
  }

  listofCoupons() {
    let obj = {
      "keykjm": this.keykjm,
      "page": 0,
      "size": 10,
      "search": null,
      //"company": this.companyId,
      "orderId": this.orderId
    }

    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.baseURL + this.getAuthenticationUrl, obj, options)
      .subscribe(data => {
        this.couponsCount=data.json().data;
        this.getAuthenticationView = data.json().data.CouponAuthenticationList;

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



  
  searchCoupon(x) {

    if (this.orderId == null|| this.orderId == undefined || this.orderId == "") {
      this.orderId = null;      
        }
        else {
          this.orderId = this.orderId;
        }
        if (x.couponId == null|| x.couponId == undefined || x.couponId == "") {
          x.couponId = null;      
        }
        else {
          x.couponId = x.couponId;
        }


        let obj = {
          "keykjm": this.keykjm,
          "page": 0,
          "size": 100000,
          "search": x.couponId,
         // "company": this.companyId,
          "orderId": this.orderId
        }

    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });


    this.http.post(this.baseURL + this.getAuthenticationUrl, obj, options)
    .subscribe(data => {
      this.getAuthenticationView = data.json().data.CouponAuthenticationList;

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



  activatingCoupons(x) {
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.baseURL + this.activateCouponUrl, x, options)
      .subscribe(data => {
        // this.getRedeemView = data.json().data.CouponRedeemableList;
         if(data.json().status == "success"){
          this.listofCoupons();
          //this.acticeCouponsForm.reset();
          this.msg = data.json().data.message;
          this.openSuccessCancelSwal(this.msg); 
 
         }      


         if (data.json().data.error_code == "414") {
          this.msg = data.json().data.error_message
          this.openErrorCancelSwal(this.msg);
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

  
  openSuccessCancelSwal(msg) {
    swal({
      // title: 'Deleted!',
      text: msg,
      type: 'success',

    }).catch(swal.noop);
  }
  
  openErrorCancelSwal(msg){
    swal({
      // title: 'Deleted!',
      text: msg,
      type: 'error',

    }).catch(swal.noop);
  }

  checkIfAllSelected(id, checked) {
    if (checked) {
      this.list.push(id)
    } else {
      var index = this.list.indexOf(id);
      this.list.splice(index, 1)
      // alert("splice =="+JSON.stringify(this.list))
    }
    // alert(JSON.stringify(this.list))
  }

  activeCoupons() {
    if (this.list.length != 0) {
      let obj = {
        "coupons": this.list,
        "status": 1,
        "keykjm": this.keykjm,
      }
      let headers = new Headers({
        "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
        "Content-Type": "Application/json"
      });
      let options = new RequestOptions({ headers: headers });

      this.http.post(this.baseURL + this.couponInactiveUrl, obj, options)
        .subscribe(data => {
          // this.getRedeemView = data.json().data.CouponRedeemableList;
          this.listofCoupons();

          if (this.msg=data.json().data.message) {
            this.list = [];
            this.openSuccessSwal(this.msg)
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
    } else {

      swal({
        text: "Select atleast one checkbox",
        type: 'warning'
      }).catch(swal.noop);
    }

  }

  inActiveCoupons() {
    if (this.list.length != 0) {
      let obj = {
        "coupons": this.list,
        "status": 0,
        "keykjm": this.keykjm,
      }
      let headers = new Headers({
        "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
        "Content-Type": "Application/json"
      });
      let options = new RequestOptions({ headers: headers });

      this.http.post(this.baseURL + this.couponInactiveUrl, obj, options)
        .subscribe(data => {
          // this.getRedeemView = data.json().data.CouponRedeemableList;
          this.listofCoupons();

          if (this.msg=data.json().data.message) {
            this.list = [];
            this.openSuccessSwal(this.msg);
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
    } else {

      swal({
        text: "Select atleast one checkbox",
        type: 'warning'
      }).catch(swal.noop);
    }
  }
  openSuccessSwal(success) {
    swal({
      text: success,
      type: 'success'
    }).catch(swal.noop);
  }

  viewTrackUsageOrder(x) {
    localStorage.setItem('couponCode',x)
    this.router.navigate(['/coupon-authentication-track']);
  }

}
