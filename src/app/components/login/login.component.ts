import {  Router } from '@angular/router';
import { apConfig } from './../../../global';
import { Component, OnInit, NgZone, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AuthenticationService } from '../../services/login/login.service';
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
  isEnterCodeShow = false;
  constructor(public router: Router, public authenticationService: AuthenticationService) { }

  ngOnInit() { }

  loginWithGmail() {
    this.authenticationService.login();
  }

  loginWithPhone() {
    this.isLoginShow = false;
    this.isEnterPhoneNumberShow = true;
  }

  submitPhoneNumber() {
    this.isEnterPhoneNumberShow = false;
    this.isEnterCodeShow = true;
  }

  submitLogin() {
      this.router.navigate(['/profile']);
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
