import { Component, OnInit, Input } from '@angular/core';
import { User } from '../_models/user';
import { UserListService } from '../_services/user-list/user-list.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public get user(): User {
    return this._userListService.selectedUser;
  }

  constructor(
    private _userListService: UserListService
  ) { }

  ngOnInit(): void {
  }

}
