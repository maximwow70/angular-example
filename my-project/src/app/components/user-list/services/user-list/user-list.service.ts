import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  public userList: User[] = [];

  public selectedUser: User | null = null;

  public userList$: ReplaySubject<User[]> = new ReplaySubject<User[]>(2);

  constructor() {
    this.userList$.next([]);
    this.userList$.next([]);
  }

  public save(): void {
    this.userList.push(new User(123123, 'new User'));
  }

  public selectUser(user: User): void {
    if (!Boolean(this.selectedUser) || this.selectedUser && this.selectedUser.id !== user.id) {
      this.selectedUser = user;
    }
  }
}
