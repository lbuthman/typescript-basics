class Point {
    x: number;
    y: number;

    //Can only have one constructor, fyi
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("drawing point of x: " + this.x +
            " and y: " + this.y);
    }

    getDistance(point: Point) {
        console.log("calculating distance");
    }
}

let point = new Point(2, 3);

point.draw();
