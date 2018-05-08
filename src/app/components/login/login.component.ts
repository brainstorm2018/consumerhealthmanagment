import {  Router } from '@angular/router';
import { apConfig } from './../../../global';
import { Component, OnInit, NgZone, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular5-social-login';
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
  constructor(public router: Router, private socialAuthService: AuthService ) { }

  ngOnInit() { }

  loginWithGmail() {
    const socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log( userData);

      }
    );
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
