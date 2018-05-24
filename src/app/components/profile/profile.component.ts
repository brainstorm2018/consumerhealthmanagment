import { User } from './../../interfaces/user';
import { ProfileService } from './../../services/profile/profile.service';
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
  user: User;
  constructor(private menutoggleService: MenutoggleService, private router: Router, private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getUsers().subscribe(data => {
      console.log('data: ', data);

      this.user = data;
      console.log('this.user: ', JSON.stringify(this.user));
    },
    error => {
      console.log('error: ', error);

    }
  )
  }


  toggleMenu() {
    this.menutoggleService.toggle();
  }

  gotoDetails() {
      this.router.navigate(['profile/details']);
  }

}
