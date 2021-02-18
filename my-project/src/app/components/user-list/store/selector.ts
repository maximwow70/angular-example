import { createFeatureSelector, MemoizedSelector } from "@ngrx/store";
import { UserListModuleState } from "./state";
import { FEATURE_NAME } from './store.config';

export const selectUserListModuleState: MemoizedSelector<
    object,
    UserListModuleState
> = createFeatureSelector<UserListModuleState>(FEATURE_NAME);
