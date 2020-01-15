import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  close=false
  register=false
  password=false
  constructor() { }

  ngOnInit() {
  }
  w3_open(){
    this.close=true
  }
  w3_close(){
this.close=false
  }
  w3_registerClose(){
    this.register=false
  }
  w3_registerOpen(){
    this.register=true
  }
  w3_passwordOpen(){
    this.password=true
  }
  w3_passwordclose(){
    this.password=false
  }
}
