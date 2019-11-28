import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AuthGuard } from 'src/app/services/auth';
import { Router } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';
import swal from 'sweetalert2'
import { IfStmt } from '@angular/compiler';
@Component({
  selector: 'app-consumers-edit',
  templateUrl: './consumers-edit.component.html',
  styleUrls: ['./consumers-edit.component.css']
})
export class ConsumersEditComponent implements OnInit {
  addConsumerForm: FormGroup;
  currentUser: any = {};
  userName: any;
  Message: any;
  baseURL = environment.baseURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  companyId = environment.companyid;
  imageURl = environment.excelURL;
  stateBasedCityUrl: string = "nikit/getCities"; //this.stateId
  statesListUrl: string = "nikit/getStates";
  deleteimage:string="nikit/documentDelete";
  msg: string;
  StrIfsc: any;
  bankdtls: any;
  getStates: any;
  statesList: any;
  documentDropDwonUrl: string = "nikit/dropDown";
  viewConsumerUrl: string = "nikit/getConsumerById";
  updateConsumerUrl: string = "nikit/consumerUpdate";
  kycStatusUrl: string = "nikit/dropDown";
  dropList: any;
  getdocument: any;
  @ViewChild('file') el: ElementRef;
  filecount: any;
  getCity: any;
  cityLists: any;
  consumerData: any;
  getConsumerData: any = {};
  keykjm: any;
  uploadedDoc: any;
  kycList: any;
  getkyclist: any;
  public disableUpdate: boolean;
  disabled: boolean;
  constructor(private spinnerService: Ng4LoadingSpinnerService, private http: Http, private allservice: AuthGuard, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    

    this.keykjm = JSON.parse(localStorage.getItem("keykjm"));

    this.bankdtls = "";
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.baseURL + this.statesListUrl, { "keykjm": this.keykjm }, options).subscribe(data => {
      this.statesList = data.json();
      // alert(JSON.stringify(this.getStates))
      this.getStates = this.statesList.data;
      if (data.json().data.error_code == "337") {
        this.msg = "Your session time out.Please login again"
        this.openSuccessCancelSwal(this.msg);
        // alert("Your session time out.Please login again")
        this.router.navigate(['/login']);
      }
      if (data.json().data.error_code == "336") {
        this.msg = "Unauthorized Login or Your session time out.Please login again"
        this.openSuccessCancelSwal(this.msg);
        // alert("Unauthorized Login or Your session time out.Please login again")
        this.router.navigate(['/login']);
      }

      // console.log(JSON.stringify(this.cityLists));
    })

    let document = {
      "category": "documentType",
      "keykjm": this.keykjm
    }

    this.http.post(this.baseURL + this.documentDropDwonUrl, document, options).subscribe(data => {
      this.dropList = data.json();
      // alert(JSON.stringify(this.getStates))
      this.getdocument = this.dropList.data;
      if (data.json().data.error_code == "337") {
        this.msg = "Your session time out.Please login again"
        this.openSuccessCancelSwal(this.msg);
        // alert("Your session time out.Please login again")
        this.router.navigate(['/login']);
      }
      if (data.json().data.error_code == "336") {
        this.msg = "Unauthorized Login or Your session time out.Please login again"
        this.openSuccessCancelSwal(this.msg);
        // alert("Unauthorized Login or Your session time out.Please login again")
        this.router.navigate(['/login']);
      }
    })


    let status = {
      "category": "kycStatus",
      "keykjm": this.keykjm
    }

    this.http.post(this.baseURL + this.kycStatusUrl, status, options).subscribe(data => {
      this.kycList = data.json();
      // alert(JSON.stringify(this.kycList))
      this.getkyclist = this.kycList.data;
      if (data.json().data.error_code == "337") {
        this.msg = "Your session time out.Please login again"
        this.openSuccessCancelSwal(this.msg);
        this.router.navigate(['/login']);
      }
      if (data.json().data.error_code == "336") {
        this.msg = "Unauthorized Login or Your session time out.Please login again"
        this.openSuccessCancelSwal(this.msg);
        this.router.navigate(['/login']);
      }

    })

    this.addConsumerForm = this.fb.group({
      consumerId: localStorage.getItem('consumerId'),
      keykjm: this.keykjm,
      firstName: [''],
      email: [''],
      mobile: [''],
      state: [''],
      city: [''],
      address1: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9@#_&--()/.,*"\':; ]+$')])],
      address2: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9@#_&--()/.,*"\':; ]+$')])],
      // address1:[''],
      // address2:[''],
      locality: [''],
      pincode: [''],
      // bankName: [''],
      // bankAccNum: [''],
      // ifscCode: [''],
      // branch: [''],
      // paytmNum: [''],
      pan: [''],
      active: [''],
      // documentType: [''],
      company: this.companyId,
      comments: [''],
      kycStatus: [''],

    })


    let obj = {
      "consumerId": localStorage.getItem('consumerId'),
      "keykjm": this.keykjm
    }

    this.http.post(this.baseURL + this.viewConsumerUrl, obj, options).subscribe(data => {
      this.consumerData = data.json();
      // alert(JSON.stringify(this.getStates))
      this.getConsumerData = this.consumerData.data;
      // alert(JSON.stringify(this.getConsumerData))   
      if (this.getConsumerData.pincode == 0) {
        this.getConsumerData.pincode = "";
      }
      this.uploadedDoc = this.getConsumerData.document;
      this.GetCityList(this.getConsumerData.state);
      this.addConsumerForm.patchValue({
        consumerId: localStorage.getItem('consumerId'),
        firstName: this.getConsumerData.firstName,
        email: this.getConsumerData.email,
        mobile: this.getConsumerData.mobile,
        state: this.getConsumerData.state,
        city: this.getConsumerData.city,
        address1: this.getConsumerData.address1,
        address2: this.getConsumerData.address2,
        locality: this.getConsumerData.locality,
        pincode: this.getConsumerData.pincode,
        // bankName: this.getConsumerData.bankName,
        // bankAccNum: this.getConsumerData.bankAccNum,
        // ifscCode: this.getConsumerData.ifscCode,
        // branch: this.getConsumerData.branch,
        paytmNum: this.getConsumerData.paytmNum,
        pan: this.getConsumerData.pan,
        active: this.getConsumerData.active,
        kycStatus: this.getConsumerData.kycStatus,
        comments: this.getConsumerData.comments,
        // documentType: this.getConsumerData.documentType,
        company: this.companyId,
      })



      if (data.json().data.error_code == "337") {
        this.msg = "Your session time out.Please login again"
        this.openSuccessCancelSwal(this.msg);
        // alert("Your session time out.Please login again")
        this.router.navigate(['/login']);
      }
      if (data.json().data.error_code == "336") {
        this.msg = "Unauthorized Login or Your session time out.Please login again"
        this.openSuccessCancelSwal(this.msg);
        // alert("Unauthorized Login or Your session time out.Please login again")
        this.router.navigate(['/login']);
      }
    })

    this.onChanges();
  }

  onChanges() {
    this.addConsumerForm.valueChanges.subscribe(val => {
      //  alert(JSON.stringify(val.kycStatus))

      //  alert(this.el.nativeElement.value == '' && val.kycStatus =='11')
      //  alert(val.kycStatus == "11" && this.el.nativeElement.value =='')
      // alert("fghfgh=="+val.check)
      // alert(val.kycStatus == '11' || val.kycStatus == '12')
      if ((val.kycStatus == "11" || val.kycStatus == "12") && (val.firstName != null && val.firstName != '') && (val.mobile != null && val.mobile != '')
        && (val.state != null && val.state != '') && (val.city != null && val.city != '') && (val.address1 != null && val.address1 != '')

        // && (val.bankAccNum != null && val.bankAccNum != '') && (val.ifscCode != null && val.ifscCode != '') && (val.bankName != null && val.bankName != '')&& (val.branch != null && val.branch != '') 
        && (val.active != null && val.active != '') && (this.el.nativeElement.value != '' || this.uploadedDoc != null && this.uploadedDoc != '')) {
        this.disableUpdate = false;

        // alert("2")
      }
      else if ((val.kycStatus == "13") && (val.comments != null && val.comments == '')) { 
        this.disableUpdate = true;
        // alert(454)
      }

      else if (val.kycStatus == "11" || val.kycStatus == "12" && (this.el.nativeElement.value == '' || (this.uploadedDoc == null && this.uploadedDoc == ''))) {
        this.disableUpdate = true;
      }

      else if (val.kycStatus == "13" || val.kycStatus == "10") {
        this.disableUpdate = false;
        // alert(/"3")
      } else {
        this.disableUpdate = true;
        // alert/("4")
      }
    })
  }

  loadBankInfo(ifsc) {
    this.StrIfsc = ifsc.toString();
    if (ifsc != null || ifsc != undefined || ifsc != "") {
      if (this.StrIfsc.length == 11) {
        this.http.get('https://ifsc.razorpay.com/' + ifsc).subscribe(data => {
          this.bankdtls = data.json();
          console.log(this.bankdtls);
        });
      }
    }
  }

  openSuccessSwal(success) {
    swal({
      text: success,
      type: 'success'
    }).catch(swal.noop);
    this.router.navigate(['/manage-master-data/colleges']);
  }
  openSuccessCancelSwal(error) {
    swal({
      // title: 'Deleted!',
      text: error,
      type: 'error',

    }).catch(swal.noop);
  }
  openWariningSwal(error) {

    swal({
      // title: 'Deleted!',
      text: error,
      type: 'warning',
    }).catch(swal.noop);
  }

  GetCityList(x) {
    //this.spinnerService.show();
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });
    let ipcity = {
      "stateId": x,
      "keykjm": this.keykjm
    }
    this.http.post(this.baseURL + this.stateBasedCityUrl, ipcity, options).subscribe(data => {
      this.getCity = data.json();
      this.cityLists = this.getCity.data;
      if (data.json().data.error_code == "337") {
        this.msg = "Your session time out.Please login again"
        this.openSuccessCancelSwal(this.msg);
        // alert("Your session time out.Please login again")
        this.router.navigate(['/login']);
      }
      if (data.json().data.error_code == "336") {
        this.msg = "Unauthorized Login or Your session time out.Please login again"
        this.openSuccessCancelSwal(this.msg);
        // alert("Unauthorized Login or Your session time out.Please login again")
        this.router.navigate(['/login']);
      }

      // console.log(JSON.stringify(this.cityLists));
    })
  }


  addConsumer(x) {
    // if (x.email == null || x.email == undefined || x.email == "") {
    //       x.email = null;
    //     } else {
    //       x.email = x.email;
    //     }
    //     if (x.address2 == null || x.address2 == undefined || x.address2 == "") {
    //       x.address2 = null;
    //     } else {
    //       x.address2 = x.address2;
    //     }
    //     if (x.locality == null || x.locality == undefined || x.locality == "") {
    //       x.locality = null;
    //     } else {
    //       x.locality = x.locality;
    //     }


    //     if (x.pan == null || x.pan == undefined || x.pan == "") {
    //       x.pan = null;
    //     } else {
    //       x.pan = x.pan;
    //     }

    x.active = +x.active;
    x.city = +x.city;
    x.pincode = +x.pincode;
    // x.documentType = +x.documentType;
    x.company = +x.company;
    x.state = +x.state;

    this.filecount = this.el.nativeElement.files.length;
    let formData: FormData = new FormData();
    for (var y = 0; y < this.filecount; y++) {
      formData.append("file", this.el.nativeElement.files[y])
    }
    formData.append("data", JSON.stringify(x))
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),

    });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.baseURL + this.updateConsumerUrl, formData, options)
      .subscribe(data => {
        this.Message = data.json();
        // console.log(JSON.stringify(data.json()));
        if (data.json().data.error_code == "337") {
          this.msg = "Your session time out.Please login again"
          this.openSuccessCancelSwal(this.msg);
          // alert("Your session time out.Please login again")
          this.router.navigate(['/login']);
        }
        if (data.json().data.error_code == "336") {
          this.msg = "Unauthorized Login or Your session time out.Please login again"
          this.openSuccessCancelSwal(this.msg);
          // alert("Unauthorized Login or Your session time out.Please login again")
          this.router.navigate(['/login']);
        }

        if (this.Message.status == "success") {
          this.msg = this.Message.data.Message
          this.openSuccessSwal(this.msg)

          this.router.navigate(['/consumers-list']);
        }
        else if (this.Message.status == "error") {
          this.msg = this.Message.data.error_message
          this.openSuccessCancelSwal(this.msg);
          // alert(this.Message.data.error_message); 
        }
        // else{
        //   alert("Failed To Add Product!!!");
        // }
      });
  }

  // approve(x) {
  //   if(x =="11"){
  //    this.addConsumerForm.setValidators([Validators.required])
  //   }else{
  //     this.addConsumerForm.invalid
  //   }

  // }


  // approve(x) {
  //   //alert(JSON.stringify(this.addConsumerForm.value.firstName != null))

  //   if (x == "11" && this.addConsumerForm.value.firstName != null && this.addConsumerForm.value.email != null && this.addConsumerForm.value.mobile != null
  //     && this.addConsumerForm.value.state != null && this.addConsumerForm.value.city != null && this.addConsumerForm.value.address1 != null
  //     && this.addConsumerForm.value.address2 != null && this.addConsumerForm.value.locality != null && this.addConsumerForm.value.pincode != null
  //     && this.addConsumerForm.value.bankAccNum != null && this.addConsumerForm.value.ifscCode != null && this.addConsumerForm.value.bankName != null
  //     && this.addConsumerForm.value.branch != null && this.addConsumerForm.value.pan != null && this.addConsumerForm.value.active != null) {
  //     this.disableUpdate=false;

  //   }

  //   else if(x=="13"){
  //     this.disableUpdate=false;
  //   } 
  //   else{
  //     this.disableUpdate=true;
  //   }



  // }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  delete(){
    this.uploadedDoc=''
  }
    
  

}