
export class Fork {

    constructor(private _type: String) {}

    get type() {
        return this._type;
    }

    set type(newType: String) {
        this._type = newType;
    }
}