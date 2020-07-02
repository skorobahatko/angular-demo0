import { Component } from '@angular/core';
import {User} from '../../models/User';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/Post';
import {PostService} from '../post/post.service';

@Component({
  selector: 'app-root',
  template: `<app-post *ngFor="let post of posts" [post]="post"></app-post>`,
  styles: ['']
})
export class AppComponent {
  title = 'ngDemo0';

  // users: User[];
  posts: Post[];


  constructor(private postService: PostService) {
    postService.posts().subscribe(items => this.posts = items);
  }
}

