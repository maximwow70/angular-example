import { Injectable } from "@angular/core";
import { select } from "@ngrx/store";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { User } from "../../models/user";
import { Load } from "./user-list.actions";
import { selectUserList } from "./user-list.selectors";
import { UserListState } from "./user-list.state";

@Injectable({
    providedIn: 'root',
})
export class UserListFacadeService {

    public get userList$(): Observable<User[]> {
        return this.store.select(selectUserList);
    }

    constructor(private store: Store<UserListState>) { }

    public loadUserList(): void {
        this.store.dispatch(new Load());
    }

}
