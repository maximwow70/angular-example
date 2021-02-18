import { createSelector, MemoizedSelector } from "@ngrx/store";
import { User } from "../../models/user";
import { selectUserListModuleState } from "../selector";
import { UserListModuleState } from "../state";
import { UserListState } from "./user-list.state";

export const selectUserListState: MemoizedSelector<
    UserListModuleState,
    UserListState
> = createSelector(
    selectUserListModuleState,
    (state: UserListModuleState) => state.userListState
)

export const selectUserList: MemoizedSelector<
    object,
    User[]
> = createSelector(
    selectUserListState,
    (state: UserListState) => state.userList
)

export const selectIsLoading: MemoizedSelector<
    object,
    boolean
> = createSelector(
    selectUserListState,
    (state: UserListState) => state.isLoading
)

export const selectError: MemoizedSelector<
    object,
    Error
> = createSelector(
    selectUserListState,
    (state: UserListState) => state.error
)
