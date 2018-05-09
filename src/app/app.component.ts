import { Component, OnInit, AfterViewInit } from "@angular/core";
import { apConfig } from "./../global";
import { MenutoggleService } from "./services/menutoggle.service";
import { AuthenticationService } from "./services/login/login.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = apConfig.MAIN_TITLE;
  logo = apConfig.LOGO;
  menuState: boolean;

  constructor(
    public menutoggleService: MenutoggleService,
    public authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.menutoggleService.currentState.subscribe(menustate => {
      this.menuState = menustate;
    });
  }

  ngAfterViewInit() {
    this.menutoggleService.currentState.subscribe(change => {
      if (change) this.openNav();
      else this.closeNav();
    });
  }

  logOut() {
    this.menutoggleService.toggle();
    this.authenticationService.logout();
  }

  openNav() {
    document.getElementById("sidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("sidenav").style.width = "0";
  }
}
