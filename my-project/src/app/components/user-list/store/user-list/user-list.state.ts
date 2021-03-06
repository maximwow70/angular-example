import { User } from "../../models/user";
export interface UserListState {
    userList: User[];
    isLoading: boolean;
    error: Error;
}

export const initialUserListState: UserListState = {
    userList: [],
    isLoading: true,
    error: null
}
