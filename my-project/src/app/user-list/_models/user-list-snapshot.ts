import { User } from './user';

export class UserListSnapshot {


    constructor(
        public userSearch: string,
        public isSortedByIncrease: boolean,
        public userList: User[],
    ) {}


    public static fromJSON(json: any): UserListSnapshot {
        return Boolean(json)
            ? new UserListSnapshot(
                json.userSearch,
                json.isSortedByIncrease,
                (json.userList || []).filter(Boolean).map(User.fromJSON)
            )
            : null;
    }

    public static toJSON(uls: UserListSnapshot): any {
        return Boolean(uls)
            ? {
                userSearch: uls.userSearch,
                isSortedByIncrease: uls.isSortedByIncrease,
                userList: (uls.userList || []).filter(Boolean).map(User.toJSON)
            }
            : {};
    }
}
