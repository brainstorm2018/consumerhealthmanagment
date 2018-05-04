import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	logo = "../../../assets/images/logo.png";

	openNav() {
		document.getElementById("sidenav").style.width = "250px";
	}

	closeNav() {
		document.getElementById("sidenav").style.width = "0";
	}

}