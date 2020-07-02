import { Component } from '@angular/core';
import {User} from '../../models/User';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: '<app-user *ngFor="let user of users" [userX]="user"></app-user>',
  styles: ['']
})
export class AppComponent {
  title = 'ngDemo0';

  users: User[];
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => this.users = data);
  }
}
