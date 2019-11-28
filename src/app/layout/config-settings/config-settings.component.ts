import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import swal from 'sweetalert2';

@Component({
  selector: 'app-config-settings',
  templateUrl: './config-settings.component.html',
  styleUrls: ['./config-settings.component.css'],
  providers: [

    { provide: Window, useValue: window }]
})
@Injectable()
export class ConfigSettingsComponent implements OnInit {
  baseURL = environment.baseURL;
  excelURL = environment.excelURL;
  btoaUsername = environment.btoaUsername;
  btoaPassword = environment.btoaPassword;
  flag = environment.flag;
  getConfigValuesUrl: string = this.baseURL + "company/getRedemptnConfig";
  updateConfigValuesUrl: string = this.baseURL + "company/increaseRedemption";
  configForm: FormGroup;
  keykjm: any;
  getData: any;

  constructor(private fb: FormBuilder, private http: Http, private router: Router, @Inject(Window) private window: Window) { }

  ngOnInit() {
    this.configForm = this.fb.group({
      maxThreshold: [''],
      minThreshold: ['']
    })
    this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
    this.getConfigData();

  }

  getConfigData() {
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.getConfigValuesUrl, { "keykjm": this.keykjm, }, options).subscribe(data => {
      this.getData = data.json().data;
      this.configForm.patchValue({
        maxThreshold: this.getData.maxThreshold,
        minThreshold: this.getData.minThreshold
      })

      if (data.json().data.error_code == "337") {
        alert("Your session time out.Please login again")
        this.router.navigate(['/login']);
      }
      if (data.json().data.error_code == "336") {
        alert("Unauthorized Login or Your session time out.Please login again")
        this.router.navigate(['/login']);
      }
    })
  }
  updateConfig(x) {
    // alert(JSON.stringify((x)))
    if (x.maxThreshold == '') {
      x.maxThreshold = 0;
    } else {
      x.maxThreshold = x.maxThreshold;
    }
    if (x.minThreshold == '') {
      x.minThreshold = 0;
    } else {
      x.minThreshold = x.minThreshold;
    }

    let obj = {
      "maxThreshold": x.maxThreshold,
      "minThreshold": x.minThreshold,
      "keykjm": this.keykjm
    }

    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
    });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.updateConfigValuesUrl, obj, options).subscribe(data => {
      // this.getData = data.json().data;
      // this.configForm.patchValue({
      //   maxThreshold:this.getData.maxThreshold,
      //   minThreshold:this.getData.minThreshold
      // })
      if (data.json().data == "Successfully updated") {
        this.getConfigData()
        swal({
          text: "Updated Successfully",
          type: 'success'
        }).catch(swal.noop);
      }
      if (data.json().data.error_code == "337") {
        alert("Your session time out.Please login again")
        this.router.navigate(['/login']);
      }
      if (data.json().data.error_code == "336") {
        alert("Unauthorized Login or Your session time out.Please login again")
        this.router.navigate(['/login']);
      }
    })
  }
}
