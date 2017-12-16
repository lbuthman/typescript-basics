class AnotherPoint {
    x: number;
    y: number;

    //Add question mark for optional parameters
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("drawing another point of x: " + this.x +
            " and y: " + this.y);
    }

    getDistance(point: AnotherPoint) {
        console.log("calculating another distance");
    }
}

let anotherPoint = new AnotherPoint(2, 3);
let andAnotherPoint = new AnotherPoint();
