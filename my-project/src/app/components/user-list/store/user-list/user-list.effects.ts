import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { of } from "rxjs";
import { Observable } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { User } from "../../models/user";
import { UserListDataService } from "../../services/user-list-data/user-list-data.service";
import { UserListActionTypes, UserListLoad, UserListLoadFailed, UserListLoadSuccess } from "./user-list.actions";

@Injectable({
    providedIn: 'root'
})
export class UserListEffects {

    public userListLoad$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserListActionTypes.UserListLoad),
            switchMap((action: UserListLoad) => {
                return this.userListDataService.loadUserList();
            }),
            map((userList: User[]) => {
                return new UserListLoadSuccess({ userList });
            }),
            catchError((error: Error) => {
                return of(new UserListLoadFailed({ error }));
            })
        );
    });

    constructor(
        private readonly actions$: Actions,
        private readonly userListDataService: UserListDataService
    ) {

    }

}
