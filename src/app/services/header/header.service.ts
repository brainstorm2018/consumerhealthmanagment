import { RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {
  private token = localStorage.getItem('authenticationToken');
  constructor() { }

  setHeader() {
    const myHeaders = new Headers();
    myHeaders.append('Access-Control-Allow-Origin', '*');
    myHeaders.append('Content-Type', 'application/json');
    const myParams = new URLSearchParams();
    const options = new RequestOptions({ headers: myHeaders, params: myParams });
    return options;
  }

  setHeaderWithToken() {
    const myHeaders = new Headers();
    myHeaders.append('Access-Control-Allow-Origin', '*');
    myHeaders.append('Token', this.token);
    const myParams = new URLSearchParams();
    const options = new RequestOptions({ headers: myHeaders, params: myParams });
    return options;
  }
}
