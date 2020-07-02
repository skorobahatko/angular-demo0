import { Component } from '@angular/core';
import {User} from '../../models/User';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-root',
  template: `<app-user *ngFor="let user of users" [userX]="user"></app-user>
            <app-post *ngFor="let post of posts" [post]="post"></app-post>`,
  styles: ['']
})
export class AppComponent {
  title = 'ngDemo0';

  users: User[];
  posts: Post[];
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => this.users = data);
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .subscribe(data => this.posts = data);
  }
}
