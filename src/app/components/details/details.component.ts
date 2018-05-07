import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToBloodPresure() {
    this.router.navigate(['profile/details/blood-presure']);
  }
}
