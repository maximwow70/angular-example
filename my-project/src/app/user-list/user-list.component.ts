import { OnInit, Component, ViewChildren, OnDestroy } from '@angular/core';
import { UserComponent } from './user/user.component';
import { User } from './_models/user';
import { UserListService } from './_services/user-list/user-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { combineLatest, Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  @ViewChildren(UserComponent)
  public userComponents: UserComponent[];

  private sub: Subscription = null;

  constructor(
    // tslint:disable-next-line: variable-name
    private _activatedRoute: ActivatedRoute,
    // tslint:disable-next-line: variable-name
    private _router: Router,
    // tslint:disable-next-line: variable-name
    public userListService: UserListService
  ) {
  }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.sub = combineLatest(
      this._activatedRoute.params,
      this.userListService.savedUserList$
    ).subscribe(([params, userList]: [Params, User[]]) => {
      // tslint:disable-next-line: radix
      const currentUserId: number = params ? parseInt(params.id) : null;
      if (userList && userList.length > 0) {
        const currentUser: User = userList.find((user: User) => user.id === currentUserId);
        if (currentUser) {
          this.userListService.selectUser(currentUser);
        } else {
          this.selectUser(userList[0].id);
        }
      }
    });
  }

  public selectUser(userId: number): void {
    this._router.navigate(['/users', userId, 'details']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
