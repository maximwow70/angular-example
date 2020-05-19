import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../../_models/user';
import { UserListDataService } from '../user-list-data/user-list-data.service';

import { delay, take, takeUntil, tap } from 'rxjs/operators';
import { UserListSettings } from '../../_models/user-list-settings';
import { Subscription, Subject, forkJoin, combineLatest } from 'rxjs';
import { UserListSnapshot } from '../../_models/user-list-snapshot';

export function toSaveLowerCase(value: string): string {
  return Boolean(value)
    ? String(value).toLowerCase()
    : '';
}

@Injectable()
export class UserListService implements OnDestroy {

  public isLoading: boolean = true;

  public savedUserList: User[] = [];
  public userList: User[] = [];

  public settings: UserListSettings = null;

  public selectedUser: User = null;
  public userSearch: string = '';
  public isUserSortedByIncrease: boolean = false;

  private destroySubject$: Subject<boolean> = new Subject<boolean>();

  constructor(
    // tslint:disable-next-line: variable-name
    private _userListDataService: UserListDataService
  ) {
    this._userListDataService.loadUserList();

    combineLatest([
      this._userListDataService.userListSnapshot$
        .pipe(
          tap(() => {
            this.isLoading = true;
          }),
          delay(1000),
          takeUntil(this.destroySubject$)
        ),
      this._userListDataService.loadSettings()
        .pipe(
          delay(2000),
          take(1),
          takeUntil(this.destroySubject$)
        )
    ]).subscribe(([uls, settings]: [UserListSnapshot, UserListSettings]) => {
      this.initUserList(uls);
      this.settings = settings;
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.destroySubject$.next(true);
    this.destroySubject$.complete();
  }

  private initUserList(uls: UserListSnapshot): void {
    this.userSearch = uls.userSearch;
    this.isUserSortedByIncrease = uls.isSortedByIncrease;
    this.savedUserList = uls.userList;
    this.search();
    this.sort();
  }

  public selectUser(user: User) {
    if (this.canSelect(user)) {
      this.selectedUser = user;
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

  public sort(): void {
    this.userList = this.userList.sort((user, otherUser) => {
      const userName: string = toSaveLowerCase(user.name);
      const otherUserName: string = toSaveLowerCase(otherUser.name);
      const result: boolean = this.isUserSortedByIncrease
        ? userName < otherUserName
        : userName > otherUserName;
      return result ? 1 : -1;
    });
    this.isUserSortedByIncrease = !this.isUserSortedByIncrease;
  }

  public search(): void {
    if (this.userSearch) {
      this.userList = this.savedUserList.filter((user: User) => {
        return toSaveLowerCase(user.name).includes(
          toSaveLowerCase(this.userSearch).toLowerCase()
        );
      });
    } else {
      this.userList = [...this.savedUserList];
    }
  }

  public save(): void {
    this.savedUserList = this.savedUserList.map((user: User) => {
      const currentUser: User = this.userList.find((otherUser: User) => otherUser.id === user.id);
      return currentUser || user;
    });
    this._userListDataService.save(
      new UserListSnapshot(
        this.userSearch,
        this.isUserSortedByIncrease,
        this.savedUserList
      )
    );
  }
}
