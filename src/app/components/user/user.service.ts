import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  users(): Observable<any> {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
