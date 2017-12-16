class Cup {

    //use underscore to camel case property below
    constructor(private _amount: number) {
    }

    get amount() {
        return this._amount;
    }

    set amount(newAmount: number) {
        if (newAmount < 0) {
            throw new Error("New amount cannot be less than 0.");
        }
        this._amount = newAmount;
    }
}

let cup = new Cup(10);
let amount = cup.amount;
console.log("drink drink drink");
cup.amount = amount - 3;