import { HeaderService } from './../header/header.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';
import { apConfig } from '../../../global';

@Injectable()
export class ProfileService {

  constructor(private http: Http, private header: HeaderService) { }

  postUser(user: User) {
   const body = JSON.stringify(user);
   return this.http
    .post(apConfig.API_ENDPOINT_URL, body, this.header.setHeaderWithToken())
    .map(res => res.json());
  }

  getUsers() {
    return this.http
    .get(apConfig.API_ENDPOINT_URL, this.header.setHeaderWithToken())
    .map(res => res.json());
  }
}
