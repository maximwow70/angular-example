import { Action } from "@ngrx/store";
import { User } from "../../models/user";

export enum UserListActionTypes {
    Load = '[UserList] Load',
    LoadSuccess = '[UserList] Load Success',
    LoadFailed = '[UserList] Load Failed',
}

export class Load implements Action {
    public readonly type: UserListActionTypes.Load = UserListActionTypes.Load;
}

export class LoadSuccess implements Action {
    public readonly type: UserListActionTypes.LoadSuccess = UserListActionTypes.LoadSuccess;
    constructor(public payload: { userList: User[] }) { }
}

export class LoadFailed implements Action {
    public readonly type: UserListActionTypes.LoadFailed = UserListActionTypes.LoadFailed;
    constructor(public payload: { error: Error }) { }
}

export type UserListActions =
    | Load
    | LoadSuccess
    | LoadFailed;
