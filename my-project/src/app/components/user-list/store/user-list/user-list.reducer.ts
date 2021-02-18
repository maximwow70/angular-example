import { UserListActions, UserListActionTypes } from "./user-list.actions";
import { initialUserListState, UserListState } from "./user-list.state";

export function userListReducer(state: UserListState = initialUserListState, action: UserListActions): UserListState {
    switch (action.type) {
        case UserListActionTypes.LoadSuccess: {
            return {
                ...state,
                userList: action.payload.userList,
                error: null,
                isLoading: false
            }
        }
        case UserListActionTypes.LoadFailed: {
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            }
        }
        default: {
            return state;
        }
    }
}
