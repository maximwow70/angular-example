import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, ViewChildren, ɵConsole } from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { User } from './models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {

  @ViewChild(UserComponent)
  public userComponents: any;

  public userList: User[] = [
    new User(1, 'Elon 1'),
    new User(2, 'Elon 2'),
    new User(3, 'Elon 3'),
    new User(4, 'Elon 12313'),
    new User(5, 'Elon 123123', false, true),
    new User(8, 'Elon hidden', true),
    new User(10000, 'Elon zxcz', false, true),
    new User(999, 'Elon asdq', false, true),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public save(template: any): void {
    console.log(this.userComponents);
    this.userList.push(new User(123123, 'new User'));
    debugger;
  }

  public userClick(user: User): void {
    this.userList = this.userList.map((currentUser: User) => {
      return new User(
        currentUser.id,
        currentUser.name,
        currentUser.hidden,
        user.id === currentUser.id ? !currentUser.isNew : currentUser.isNew
      );
    });
  }

}
