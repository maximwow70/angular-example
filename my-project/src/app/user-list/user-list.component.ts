import { OnInit, Component, ViewChildren } from '@angular/core';
import { UserComponent } from './user/user.component';
import { User } from './_models/user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public userList: User[] = [
    new User(2, 'nike'),
    new User(6, 'Misha'),
    new User(65, 'vadzim'),
    new User(16, 'vadzim'),
    new User(27, 'vadzim'),
    new User(39, 'vadzim'),
    new User(44, 'vadzim'),
    new User(58, 'Slava'),
    new User(211221, 'Alexander', true),
    new User(1001020, 'Oleg', true),
  ];

  public filteredUserList: User[] = [];

  @ViewChildren(UserComponent)
  public userComponents: UserComponent[];

  public selectedUser: User = null;

  public userSearch: string = '';

  public isUserSortedByIncrease: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.sort();
    this.search();
  }

  public selectUser(user: User) {
    if (this.canSelect(user)) {
      this.selectedUser = user;
      // console.log(this.selectedUser);
    }
  }

  public canSelect(user: User): boolean {
    return Boolean(user)
      && (!this.selectedUser || this.selectedUser.id !== user.id);
  }

  public isUserSelected(user: User) {
    return Boolean(this.selectedUser)
      && this.selectedUser.equals(user);
  }

  public trigger(): void {
    if (this.selectedUser) {
      this.selectedUser = new User(
        this.selectedUser.id,
        'Other name'
      );
    }
  }

  public sort(): void {
    this.userList = this.userList.sort((user, otherUser) => {
      const userName: string = String(user.name).toLowerCase();
      const otherUserName: string = String(otherUser.name).toLowerCase();
      const result: boolean = this.isUserSortedByIncrease
        ? userName < otherUserName
        : userName > otherUserName;
      return result ? 1 : -1;
    });
    this.isUserSortedByIncrease = !this.isUserSortedByIncrease;
  }

  public search(): void {
    if (this.userSearch) {
      this.filteredUserList = this.userList.filter((user: User) => {
        return String(user.name).toLowerCase().includes(
          String(this.userSearch).toLowerCase()
        );
      });
    } else {
      this.filteredUserList = [...this.userList];
    }
  }

}
