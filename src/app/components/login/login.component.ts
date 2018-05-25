import { CookieService } from 'ngx-cookie';
import { HeaderService } from './../../services/header/header.service';
import { Router } from "@angular/router";
import { apConfig } from "./../../../global";
import {
  Component,
  OnInit,
  NgZone,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { AuthenticationService } from "../../services/login/login.service";
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
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
  constructor(
    public router: Router,
    public authenticationService: AuthenticationService,
    private headerService: HeaderService,
    private http: Http,
    // private _cookieService: CookieService
  ) { }

  ngOnInit() {
    // return this._cookieService.getAll();
  }


  private authCheck() {
    localStorage.setItem('authenticationToken', 'something');
    if (localStorage.getItem('authenticationToken') !== null) {
      this.router.navigate(['/profile']);
    }
  }

  loginWithGmail() {
    // this.authenticationService.login();
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
    this.router.navigate(["/profile"]);
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


  onSubmit(f: NgForm) {
    f.value.scope = "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
    let body = JSON.stringify(f.value);
    return this.http
      .post('http://206.189.143.10:8080/signin/google', body, this.headerService.setHeader()).map(res => res.json()).subscribe(
        data => {
          console.log("data", data);
        },
        error => {
          console.log("error", error.json());
        }
      );
  }
}
