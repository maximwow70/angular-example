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

    constructor(
        id: number,
        name: string
    ) {
        this._id = id;
        this._name = name;
    }

}
