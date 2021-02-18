import { UserListActions, UserListActionTypes } from "./user-list.actions";
import { initialUserListState, UserListState } from "./user-list.state";

export function userListReducer(
    state: UserListState = initialUserListState,
    action: UserListActions
): UserListState {
    switch (action.type) {
        case UserListActionTypes.UserListLoadSuccess: {
            return {
                ...state,
                userList: action.payload.userList,
                isLoading: false,
                error: null
            };
        }
        case UserListActionTypes.UserListLoadFailed: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };
        }
        default: {
            return state;
        }
    }
}
