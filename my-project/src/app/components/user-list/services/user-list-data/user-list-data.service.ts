import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserListDataService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  public loadUserList(): Observable<User[]> {
    return this._httpClient.get<any[]>('assetqweqwes/db/user-list.json')
      .pipe(
        map((userList: User[]) => {
          return userList.map((userJSON: any) => User.fromJSON(userJSON));
        })
      );
  }
}
