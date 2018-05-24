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
    myHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJicmFpbnN0b3JtX3NvbHV0aW9ucyIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE1MjcyNTc4NDR9.0K-qc29oOxKmUU13wwkHUThM2Yw8Cpp6V9J1LGE-Jhw2_WmXHXhZkaSS_Ly1Yc-SgMyD68wpvy3m6H8uEuoHvw');
    const myParams = new URLSearchParams();
    const options = new RequestOptions({ headers: myHeaders, params: myParams });
    return options;
  }
}
