import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { EMPTY, Observable, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { User } from "../../models/user";
import { UserListDataService } from "../../services/user-list-data/user-list-data.service";
import { Load, LoadFailed, LoadSuccess, UserListActionTypes } from "./user-list.actions";

@Injectable()
export class UserListEffects {

    @Effect()
    public load$: Observable<Action> = this.actions$.pipe(
        ofType(UserListActionTypes.Load),
        switchMap((action: Load) => {
            return this.userListDataService.loadUserList();
        }),
        map((userList: User[]) => {
            return new LoadSuccess({ userList });
        }),
        catchError((error: Error) => {
            return of(new LoadFailed({ error }));
        })
    );

    public constructor(
        private readonly actions$: Actions,
        private readonly userListDataService: UserListDataService
    ) { }
}
