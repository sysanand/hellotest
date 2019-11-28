import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hideTop: boolean;
  Message: any;
  loginForm: FormGroup;

  baseURL = environment.baseURL;
  companyID = environment.companyid;


  loginUrl: string = this.baseURL + "matrix/loginNew"
  message: string;
  keykjm: any;
  constructor(private fb: FormBuilder, private http: Http, private router: Router, private _location: Location) { }
  // private spinnerService: Ng4LoadingSpinnerService,
  ngOnInit() {
    this.loginForm = this.fb.group({
      user_name: [''],
      password: ['']

    })
  }

  login(x) {
    // this.spinnerService.show();
    // alert(JSON.stringify(x));
    // localStorage.setItem("username",JSON.stringify(x));
    if (x.user_name.length == 0) {
      alert("Enter User Name");
    }
    else if (x.password.length == 0) {
      alert("Enter Password");
    }
    else {
      x.flag = environment.flag;
      x.company = this.companyID;
      
      // alert(JSON.stringify(x));

      let headers = new Headers({
        "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
        "Content-Type": "Application/json"
      });
      let options = new RequestOptions({ headers: headers });

      this.http.post(this.loginUrl, x, options)
        .subscribe(data => {
          this.Message = data.json();
          if (data.json().data.error_code == "397") {
            alert("Session Timeout");
            this.router.navigate(['/login']);
          }
          if (data.json().data.error_code == "393") {
            alert("Unauthorized Login");
            this.router.navigate(['/login']);
          }

          if (this.Message.status == "success") {
            localStorage.setItem("name", JSON.stringify(this.Message.data.name));
            localStorage.setItem("keykjm", JSON.stringify(this.Message.data.session));            
            this.router.navigate(['/dashboard']);
          }
          else {
            alert("Invalid user credentials");
          }
        })
    }
  }

}
