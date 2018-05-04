import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logo = "../../../assets/images/logo.png";
  backgroundImage = "../../../assets/images/phrase1.png";

  isLoginShow = true;
  isEnterPhoneNumberShow = false;
  isEnterCodeShow = false
  constructor() { }

  ngOnInit() {}

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
