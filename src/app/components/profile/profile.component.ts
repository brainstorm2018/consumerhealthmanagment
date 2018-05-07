import { MenutoggleService } from './../../services/menutoggle.service';
import { Component, OnInit } from '@angular/core';
import { apConfig } from './../../../global';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  logo = apConfig.LOGO;

  constructor(private menutoggleService: MenutoggleService, private router: Router) { }

  ngOnInit() {
  }


  toggleMenu() {
    this.menutoggleService.toggle();
  }

  gotoDetails() {
      this.router.navigate(['profile/details']);
  }

}
