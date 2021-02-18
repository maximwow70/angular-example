import { Action } from "@ngrx/store";
import { User } from "../../models/user";

export enum UserListActionTypes {
    UserListLoad = '[UserList] User List Load',
    UserListLoadSuccess = '[UserList] User List Load Success',
    UserListLoadFailed = '[UserList] User List Load Failed',
}

export class UserListLoad implements Action {
    public readonly type: UserListActionTypes.UserListLoad = UserListActionTypes.UserListLoad;
}

export class UserListLoadSuccess implements Action {
    public readonly type: UserListActionTypes.UserListLoadSuccess = UserListActionTypes.UserListLoadSuccess;
    constructor(public payload: { userList: User[] }) { }
}

export class UserListLoadFailed implements Action {
    public readonly type: UserListActionTypes.UserListLoadFailed = UserListActionTypes.UserListLoadFailed;
    constructor(public payload: { error: Error }) { }
}

export type UserListActions =
    UserListLoad
    | UserListLoadSuccess
    | UserListLoadFailed;


