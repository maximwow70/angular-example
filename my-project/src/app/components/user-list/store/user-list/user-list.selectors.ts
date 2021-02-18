import { createSelector } from "@ngrx/store";
import { MemoizedSelector } from "@ngrx/store";
import { User } from "../../models/user";
import { selectUserListModuleState } from "../selector";
import { UserListModuleState } from "../state";
import { UserListState } from "./user-list.state";

export const selectUserListState: MemoizedSelector<UserListModuleState, UserListState> = createSelector(
    selectUserListModuleState,
    (state: UserListModuleState) => state.userList
);

export const selectUserList: MemoizedSelector<object, User[]> = createSelector(
    selectUserListState,
    (state: UserListState) => state.userList
);
