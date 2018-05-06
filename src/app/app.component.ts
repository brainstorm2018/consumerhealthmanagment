import { Component, OnInit, AfterViewInit } from '@angular/core';
import { apConfig } from './../global';
import { MenutoggleService } from "./services/menutoggle.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
	title = apConfig.MAIN_TITLE;
	logo = apConfig.LOGO;
	menuState: boolean;

	constructor(private menutoggleService: MenutoggleService) {

	}

	ngOnInit() {
		this.menutoggleService.currentState.subscribe(menustate => {
			this.menuState = menustate
		});
	}

	ngAfterViewInit() {
		this.menutoggleService.currentState.subscribe((change)=>{
			if (change) this.openNav();
			else this.closeNav();
		});
	}
	openNav() {
		document.getElementById("sidenav").style.width = "250px";
	}

	closeNav() {
		document.getElementById("sidenav").style.width = "0";
	}
}