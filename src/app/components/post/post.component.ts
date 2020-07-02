import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: ['div {border: 1px solid black; background-color: grey; margin-top: 10px}']
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;
  constructor() { }
  ngOnInit(): void {
  }

}
