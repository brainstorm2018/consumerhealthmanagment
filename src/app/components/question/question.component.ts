import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  firstQuestion = true;
  secondQuestion = false;
  thirdQuestion = false;
  fourthQuestion = false;
  fivethQuestion = false;
  
  constructor() { }

  ngOnInit() {
  }

  goToNext() {
    if (this.firstQuestion) {
      this.firstQuestion = false;
      this.secondQuestion = true;
    } else if (this.secondQuestion) {
      this.thirdQuestion = true;
      this.secondQuestion = false;
    }else if(this.thirdQuestion){
      this.fourthQuestion = true;
      this.thirdQuestion = false;
    }else if(this.fourthQuestion){
      this.fivethQuestion = true;
      this.fourthQuestion = false;
    }
  }

  unduQuestion() {
    if (this.secondQuestion) {
      this.firstQuestion = true;
      this.secondQuestion = false;
    } else if (this.thirdQuestion) {
      this.thirdQuestion = false;
      this.secondQuestion = true;
    }else if(this.fourthQuestion){
      this.fourthQuestion = false;
      this.thirdQuestion = true;
    }else if(this.fivethQuestion){
      this.fivethQuestion = false;
      this.fourthQuestion = true;
    }
  }

}
