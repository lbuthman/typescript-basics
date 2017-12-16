
/*
    To compile this code, you must pass the target flat ES5.
    ex: tsc *.ts --target ES5
*/

export class LikeComponent {

    constructor(private _likesCount: number, private _isSelected: boolean) {
    }

    get likesCount() {
        return this._likesCount;
    }

    get isSelected() {
        return this._isSelected;
    }

    onClick() {
        this._likesCount += this._isSelected ? -1 : 1;
        this._isSelected = !this._isSelected;
    }
}