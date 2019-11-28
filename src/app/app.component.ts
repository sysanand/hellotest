import { Component } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ORBIT';
  hideTop: boolean=false;
  constructor(private _location: Location) { }  
  
  ngOnInit() {
  
   
if(this._location.path() == "/login"){
  
  this.hideTop=false;
}else{
  this.hideTop=true;
}  
     }
}

