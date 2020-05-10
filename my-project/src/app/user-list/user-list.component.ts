import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public userList: User[] = [
    new User(2, 'Nike'),
    new User(6, 'Misha'),
    new User(4, 'Vadzim'),
    new User(8, 'Slava'),
    new User(211221, 'Alexander', true),
    new User(1001020, 'Oleg', true),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
