export class User {

    constructor(
        public id: number,
        public name: string,
        public isNew: boolean = false
    ) {}

    public equals(user: User): boolean {
        return Boolean(user)
            && this.id === user.id
            && this.name === user.name
            && this.isNew === user.isNew;
    }
}
