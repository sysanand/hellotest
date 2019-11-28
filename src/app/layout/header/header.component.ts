import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { RequestOptions,Headers } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import 'rxjs/add/observable/of';

// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  session: any;
  name: any;

  Message: any;
  loginForm: FormGroup;
  
  baseURL = environment.baseURL;


  logoutUrl: string = this.baseURL + "matrix/logout"
  keykjm: any;
  constructor( private fb: FormBuilder, private http: Http, private router: Router) { }
 

  ngOnInit() {
    this.name = JSON.parse(localStorage.getItem("name"));
  }
  logout()
  {
    this.keykjm = JSON.parse(localStorage.getItem("keykjm"));    
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
      });
      let options = new RequestOptions({ headers: headers });
    //   this.http.post(this.loginUrl, x, options)
    this.keykjm={"keykjm":this.keykjm}
    this.http.post(this.logoutUrl, this.keykjm,options)
   
      .subscribe(data => {
        this.Message = data.json().data;
        // alert(this.Message.status);
       
        if(data.json().data.error_code=="397")
        {
          alert("Session Timeout");
          this.router.navigate(['/login']);
        }
        if(data.json().data.error_code=="393")
        {
          alert("Session Timeout or Inavlid please try again...");
          this.router.navigate(['/login']);
        }
        if (this.Message.message == 'Logout successfully') {      
         this.router.navigate(['/login'])         
        }       
      })
      localStorage.clear();
      this.router.navigate(['/login'])
  }
  
  
}
