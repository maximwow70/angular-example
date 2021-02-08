import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserListService } from '../../services/user-list/user-list.service';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {

  // @Input() user!: User;

  constructor(
    public userListService: UserListService
  ) { }

  ngOnInit(): void {
  }

}
