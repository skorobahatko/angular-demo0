import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  @Input()
  userX: User;

  constructor() { }

  ngOnInit(): void {
  }

}
