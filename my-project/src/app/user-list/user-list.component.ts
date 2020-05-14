import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';
import { User } from '../user/user';
import { UserComponent } from '../user/user.component';

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

  @ViewChildren(UserComponent)
  public userComponents: UserComponent[];

  constructor() { }

  ngOnInit(): void {
  }

  public trigger(): void {
    this.userComponents.forEach(userComponent => {
      userComponent.selectUser();
    });
  }

}
