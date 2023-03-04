"use strict";
exports.__esModule = true;
var score;
score = 5;
score = "9303";
var Naganandhini = {
    name: "Nandhini",
    id: 42
};
Naganandhini = {
    username: "Nandhini",
    id: 42
};
// Naganandhini = {    --> not allowed as it is not a type
//     number1: 987,
//     id: 42,
// };
//Function
function getDBId(id) {
    if (typeof id === "string") {
        id.toLocaleUpperCase();
    }
    // id + 2 --> won't allow , check id is number or string
    if (typeof id === "number") {
        id + 2;
    }
}
//Array
var data1 = [1, 2];
data1.push(1);
var data2 = ["1", 1, 3, 5];
var pi;
pi = 3.14;
// pi = 9.0  --> won't allow as it should be 3.14
var seatAllotment;
seatAllotment = "aisle";
