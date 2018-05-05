import { apConfig } from './../../../global';
import { Component, OnInit, NgZone, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  imageURL: string;
  email: string;
  name: string;
  token: string;
  logo = apConfig.LOGO;
  backgroundImage = apConfig.BACKGROUNDPHRASE;

  isLoginShow = true;
  isEnterPhoneNumberShow = false;
  isEnterCodeShow = false
  constructor() { }

  ngOnInit() { }

  loginWithGmail() {
    this.isLoginShow = false;
    this.isEnterPhoneNumberShow = true;
  }

  submitPhoneNumber() {
    this.isEnterPhoneNumberShow = false;
    this.isEnterCodeShow = true;
  }

  submitLogin() {

  }

  backEvent() {
    if (this.isEnterPhoneNumberShow) {
      this.isLoginShow = true;
      this.isEnterPhoneNumberShow = false;
    } else if (this.isEnterCodeShow) {
      this.isEnterPhoneNumberShow = true;
      this.isEnterCodeShow = false;
    }
  }
}
