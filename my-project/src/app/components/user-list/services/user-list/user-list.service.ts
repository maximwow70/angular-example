import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  public selectedUser: User | null = null;

  constructor() {
  }

  public selectUser(user: User): void {
    if (!Boolean(this.selectedUser) || this.selectedUser && this.selectedUser.id !== user.id) {
      this.selectedUser = user;
    }
  }
}
