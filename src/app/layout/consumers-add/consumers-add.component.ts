import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AuthGuard } from 'src/app/services/auth';
import { Router } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';
import swal from 'sweetalert2'

@Component({
  selector: 'app-consumers-add',
  templateUrl: './consumers-add.component.html',
  styleUrls: ['./consumers-add.component.css']
})
export class ConsumersAddComponent implements OnInit {
  addConsumerForm: FormGroup;

  currentUser: any = {};
  userName: any;
  roleId: any;
  userId: any;
  menuIcons: any;
  dealerTypeList: any = [];
  statusList: any = [];
  orgTypeList: any = [];
  assignTeamList: any = [];
  countryList: any = [];
  stateListData: any = [];
  getCity: any = [];
  cityLists: any = [];
  mainDealerList: any = [];
  getDealerTeam: any = [];
  Message: any;
  show: boolean;

  addDealerPost: any = {};

  baseURL = environment.baseURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  companyId = environment.companyid;

  stateBasedCityUrl: string = "nikit/getCities"; //this.stateId
  statesListUrl: string = "nikit/getStates";

  selectedItems = [];
  settings = {};
  ip: { "sessionKey": string; };
  ipcity: { "stateId": any; "sessionKey": any; };
  assignip: { "sessionKey": any; "cityId": number; };
  msg: string;
  StrIfsc: any;
  bankdtls: any;
  getStates: any;
  statesList: any;
  documentDropDwonUrl: string = "nikit/dropDown";
  addConsumerUrl: string = "nikit/consumerRegister"
  dropList: any;
  getdocument: any;
  @ViewChild('file') el: ElementRef;
  filecount: any;
  keykjm: any;
  constructor(private spinnerService: Ng4LoadingSpinnerService, private http: Http, private allservice: AuthGuard, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.statusList = [];
    this.countryList = [];
    this.stateListData = [];
    this.bankdtls = "";
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.keykjm = JSON.parse(localStorage.getItem("keykjm"));

    // this.allservice.getStatesUrl().subscribe(data => {
    //   this.stateListData = data.data;
    //   // console.log(JSON.stringify(this.stateListData));
    // })
   
    let obj={
      "keykjm":this.keykjm
      }

    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.baseURL + this.statesListUrl, obj, options).subscribe(data => {
      this.statesList = data.json();
      // alert(JSON.stringify(this.getStates))
      this.getStates = this.statesList.data;
      // if (data.json().data.error_code == "337") {
      //   this.msg = "Your session time out.Please login again"
      //   this.openSuccessCancelSwal(this.msg);
      //   // alert("Your session time out.Please login again")
      //   this.router.navigate(['/login']);
      // }
      // if (data.json().data.error_code == "336") {
      //   this.msg = "Unauthorized Login or Your session time out.Please login again"
      //   this.openSuccessCancelSwal(this.msg);
      //   // alert("Unauthorized Login or Your session time out.Please login again")
      //   this.router.navigate(['/login']);
      // }

      // console.log(JSON.stringify(this.cityLists));
    })


    let document = {
      "category": "documentType",
      "keykjm":this.keykjm
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

      // console.log(JSON.stringify(this.cityLists));
    })


    this.addConsumerForm = this.fb.group({
      keykjm:this.keykjm,
      firstName: [''],
      email: [''],
      mobile: [''],
      state: [''],
      city: [''],
      address1: ['',Validators.compose([Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9@#_&--()/.,*"\':; ]+$')])],
      address2: ['',Validators.compose([Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9@#_&--()/.,*"\':; ]+$')])],
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
      company: this.companyId
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
      "keykjm":this.keykjm    
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
  keyPress(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  addConsumer(x) {

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
    this.http.post(this.baseURL + this.addConsumerUrl, formData, options)
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
          this.msg = this.Message.data.message
          this.openSuccessSwal(this.msg)
          // alert(this.Message.data.message);

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

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}