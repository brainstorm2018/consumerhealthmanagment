import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class MenutoggleService {
  private isMenuOpen = new BehaviorSubject<boolean>(false);
  currentState = this.isMenuOpen.asObservable();
  currentValue = false;
  constructor() { }

  toggle() {
    this.currentValue =! this.currentValue
    this.isMenuOpen.next(this.currentValue);
  }

}
