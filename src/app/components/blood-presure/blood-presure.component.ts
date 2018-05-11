import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blood-presure',
  templateUrl: './blood-presure.component.html',
  styleUrls: ['./blood-presure.component.css']
})
export class BloodPresureComponent implements OnInit {
  model:any={
  };
  time = {hour: 13, minute: 30};
  constructor() { }

  ngOnInit() {
    this.model.year = new Date().getFullYear();
    this.model.month = new Date().getMonth()+1;
    this.model.day = new Date().getDate();
  }

  testClick() {
      console.log(this.model);
  }

}
