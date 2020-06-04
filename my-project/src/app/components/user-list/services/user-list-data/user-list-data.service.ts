import { Injectable } from '@angular/core';
import { User } from '../../_models/user';
import { Observable, of, Subject, ReplaySubject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { UserListSettings } from '../../_models/user-list-settings';
import { UserListSnapshot } from '../../_models/user-list-snapshot';

@Injectable()
export class UserListDataService {

  private static userListLSKey: string = "app--user-list";

  // tslint:disable-next-line: variable-name
  private _baseUrl: string = 'assets';

  public userListSnapshot$: ReplaySubject<UserListSnapshot> = new ReplaySubject<UserListSnapshot>(1);

  constructor(
    // tslint:disable-next-line: variable-name
    private _httpClient: HttpClient
  ) { }

  public loadUserList(): void {
    const LSData: string = localStorage.getItem(UserListDataService.userListLSKey);
    if (LSData) {
      this.userListSnapshot$.next(
        UserListSnapshot.fromJSON(JSON.parse(LSData))
      );
    } else {
      this._httpClient.get<User[]>(`${this._baseUrl}/user-list.json`)
        .pipe(
          tap((json: any) => {
            this.userListSnapshot$.next(
              new UserListSnapshot(
                '',
                false,
                (json || []).filter(Boolean).map(User.fromJSON)
              )
            );
          })
        );
    }
  }

  public loadSettings(): Observable<UserListSettings> {
    return this._httpClient.get<UserListSettings>(`${this._baseUrl}/user-list-settings.json`);
  }

  public save(uls: UserListSnapshot): void {
    localStorage.setItem(
      UserListDataService.userListLSKey,
      JSON.stringify(
        UserListSnapshot.toJSON(uls)
      )
    );
    this.loadUserList();
  }
}
