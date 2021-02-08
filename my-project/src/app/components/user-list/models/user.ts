export class User {

    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(id: number) {
        this._id = id;
    }

    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(name: string) {
        this._name = name;
    }

    private _hidden: boolean;
    public get hidden(): boolean {
        return this._hidden;
    }
    public set hidden(hidden: boolean) {
        this._hidden = hidden;
    }

    private _isNew: boolean;
    public get isNew(): boolean {
        return this._isNew;
    }
    public set isNew(isNew: boolean) {
        this._isNew = isNew;
    }

    constructor(
        id: number,
        name: string,
        hidden: boolean = false,
        isNew: boolean = false
    ) {
        this._id = id;
        this._name = name;
        this._hidden = hidden;
        this._isNew = isNew;
    }

    public equals(other: User): boolean {
        return Boolean(other)
            && this.id === other.id
            && this.name === other.name
            && this.hidden === other.hidden
            && this.isNew === other.isNew;
    }

    public static fromJSON(json: any): User {
        return new User(
            json.id,
            json.name,
            json.hidden,
            json.is_new
        );
    }

}
