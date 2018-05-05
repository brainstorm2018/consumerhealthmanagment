import { MenutoggleService } from './../../services/menutoggle.service';
import { Component, OnInit } from '@angular/core';
import { apConfig } from './../../../global';
import {  } from "../../services/menutoggle.service";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  constructor(private menutoggleService: MenutoggleService) { }

  ngOnInit() {
  }


  toggleMenu() {
    this.menutoggleService.toggle();
  }

	logo = apConfig.LOGO;

}
