import { HeaderService } from './../header/header.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';

@Injectable()
export class ProfileService {

  constructor(private http: Http, private header: HeaderService) { }


  postUser(user: User) {
    let body = JSON.stringify(user);
   return this.http
    .post('api', body, this.header.setHeader())
    .map(res => res.json());
  }

  getUsers() {
    return this.http
    .get('api', this.header.setHeader())
    .map(res => res.json());
  }
}
