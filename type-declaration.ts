//without a type declaration, let will allow a variable to be any type
let a;
a = 1;
a = "a";
a = "anything";

//declare the type and only that type will be valid
let b: number;
b = 1;
// b = "a";
// b = "anything";

let c: boolean;
let d: string;
let e: any;
let f: number[] = [1, 2, 3];
let g: any[] = [1, true, "string"]; //though not a best practice

enum Color { Red = 0, Green = 1, Blue = 2}
let backgroundColor = Color.Blue;
