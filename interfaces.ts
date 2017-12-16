interface Point {
    x: number,
    y: number
}

//in-line annotation
//can violate DRY
// let drawPoint = (point: { x: number, y: number}) => {

// }

//uses created interface and can be reused
let drawPoint = (point: Point) => {

}

drawPoint({
    x: 1,
    y: 1
})