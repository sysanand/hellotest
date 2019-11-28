import { Component, OnInit, Inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthGuard } from '../../services/auth';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Location } from '@angular/common';
import { ChangeDetectorRef, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  // Userlist: any;
  baseURL = environment.baseURL;  
  profileForm: FormGroup;
  keykjm: any;
  changepasswordListUrl: string = this.baseURL +"matrix/changePassword";
  profileListUrl: string = this.baseURL +"matrix/profileData";
  changepasslist: any;
  profilelist: any;
  constructor( private fb: FormBuilder, private http: Http, private router: Router) { }

  ngOnInit() {
    this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
    this.profileForm = this.fb.group({
      
      keykjm: [''],     
      newPassword: [''],
      oldPassword: [''],
     
      
    })
    this.keykjm={"keykjm":this.keykjm}
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
      });
      let options = new RequestOptions({ headers: headers });    
    // UserServicesUrl:string=this.baseURL + 'user/userlist/' + (page_no - 1) + '/' + this.page_size + '/' + this.roleId + '/' + this.city + '/' + this.state + '/' + search,
    this.http.post(this.profileListUrl,this.keykjm,options)
    .subscribe(data =>{    
    this.profilelist=data.json().data;
    // if(data.json().data.error_code=="397")
    // {
    //   alert("Session Timeout");
    //   this.router.navigate(['/login']);
    // }
    // if(data.json().data.error_code=="393")
    // {
    //   alert("Session Timeout or Inavlid please try again...");
    //   this.router.navigate(['/login']);
    // }
    });
  }
  changepassword(x)
  {
    x.keykjm=this.keykjm.keykjm;
     //alert(JSON.stringify(x))
    let headers = new Headers({
      "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
      "Content-Type": "Application/json"
      });
      let options = new RequestOptions({ headers: headers });    
    // UserServicesUrl:string=this.baseURL + 'user/userlist/' + (page_no - 1) + '/' + this.page_size + '/' + this.roleId + '/' + this.city + '/' + this.state + '/' + search,
    this.http.post(this.changepasswordListUrl,x,options)
    .subscribe(data =>{    
    this.changepasslist=data.json().data;
    // alert(JSON.stringify(data.json().data.error_message));  
    // if(data.json().data.error_code=="397")
    // {
    //   alert("Session Timeout");
    //   this.router.navigate(['/login']);
    // }
    // if(data.json().data.error_code=="393")
    // {
    //   alert("Session Timeout or Inavlid please try again...");
    //   this.router.navigate(['/login']);
    // }
    if( this.changepasslist.message=="Password Changed Successfully")
    {
          alert("Password Changed Successfully")
          this.router.navigate(['/login']);
    }
    if( this.changepasslist.error_message=="Password entered is same as old password. Enter new one!")
    {
          alert("Password entered is same as old password. Enter new one!")
    }
    });
  }

}
