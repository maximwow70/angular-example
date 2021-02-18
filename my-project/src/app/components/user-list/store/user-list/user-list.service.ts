import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserListLoad } from './user-list.actions';
import { selectIsLoading, selectUserList } from './user-list.selectors';
import { UserListState } from './user-list.state';

@Injectable({
    providedIn: 'root'
})
export class UserListFacadeService {

    public get userList$(): Observable<User[]> {
        return this.store.select(selectUserList);
    }

    public get isLoading$(): Observable<boolean> {
        return this.store.select(selectIsLoading);
    }

    constructor(
        private store: Store<UserListState>
    ) { }

    public loadUserList(): void {
        this.store.dispatch(new UserListLoad());
    }

}
