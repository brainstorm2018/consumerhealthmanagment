import { Service } from './../../interfaces/user';
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
  service: Service;
  constructor(private menutoggleService: MenutoggleService, private router: Router, private profileService: ProfileService) { }

  ngOnInit() {
    const data = [
      {
         "id":"5b063a8a53264c3c6efb0b8e",
         "title":"S2",
         "description":"Please go for at last 10 mins walk everydayPlease go for at last 10 mins walk everyday",
         "categoryId":"5afadc3453264c42d9d2b5ba",
         "userEmail":"brainstormsolutionsal@gmail.com",
         "planFor":{
            "id":null,
            "name":"krishna",
            "gender":"male",
            "mobileNo":"1234567890",
            "email":"brainstormsolutionsal@gmail.com",
            "birthDate":"2018-08-10"
         }
      },
      {
         "id":"5b063ab353264c3c6efb0b8f",
         "title":"S1",
         "description":"The routine health check designed for busy man",
         "categoryId":"5afadc3453264c42d9d2b5b8",
         "userEmail":"brainstormsolutionsal@gmail.com",
         "planFor":{
            "id":null,
            "name":"Ventaka",
            "gender":"male",
            "mobileNo":"1234567890",
            "email":"brainstormsolutionsal@gmail.com",
            "birthDate":"2018-08-10"
         }
      },
      {
         "id":"5b063af853264c3c6efb0b90",
         "title":"S3",
         "description":"Please go for at last 10 mins walk everydayPlease go for at last 10 mins walk everyday.",
         "categoryId":"5afadc3453264c42d9d2b5c0",
         "userEmail":"brainstormsolutionsal@gmail.com",
         "planFor":{
            "id":null,
            "name":"Pratik",
            "gender":"male",
            "mobileNo":"1234567890",
            "email":"brainstormsolutionsal@gmail.com",
            "birthDate":"2018-08-10"
         }
      }
   ]

    this.service = data;
    console.log('this.service: ', this.service);
    this.getAllService();

  }


  private getAllService() {
    this.profileService.getUsers().subscribe(data => {
      console.log('data: ', data);
      this.service = data;
      console.log('this.user: ', JSON.stringify(this.service));
    }, error => {
      console.log('error: ', error);
    });
  }

  toggleMenu() {
    this.menutoggleService.toggle();
  }

  gotoDetails() {
    this.router.navigate(['profile/details']);
  }

}
