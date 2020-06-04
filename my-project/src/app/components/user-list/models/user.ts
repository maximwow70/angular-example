export class User {

    constructor(
        public id: number,
        public name: string,
        public isNew: boolean = false
    ) {}

    public static fromJSON(json: any): User {
        return Boolean(json)
            ? new User(json.id, json.name, json.isNew)
            : null;
    }

    public static toJSON(user: User): any {
        return Boolean(user)
            ? {
                id: user.id,
                name: user.name,
                isNew: user.isNew
            }
            : {};
    }

    public equals(user: User): boolean {
        return Boolean(user)
            && this.id === user.id
            && this.name === user.name
            && this.isNew === user.isNew;
    }
}
