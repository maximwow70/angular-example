import { OnInit, Component, ViewChildren } from '@angular/core';
import { UserComponent } from './user/user.component';
import { User } from './_models/user';
import { UserListService } from './_services/user-list/user-list.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @ViewChildren(UserComponent)
  public userComponents: UserComponent[];

  constructor(
    // tslint:disable-next-line: variable-name
    public userListService: UserListService
  ) {
  }

  ngOnInit(): void {
  }

}
