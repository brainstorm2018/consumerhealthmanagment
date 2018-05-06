import { apConfig } from './../global';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	logo = apConfig.LOGO;

	closeNav() {
		document.getElementById("sidenav").style.width = "0";
	}
}