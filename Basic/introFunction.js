"use strict";
exports.__esModule = true;
var sampleFunction = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return console.log(name, email, isPaid);
};
sampleFunction("Naganandhini", "naganandhini112@gmail.com");
// mention data tyoe for return value
function addTwo(num1, num2) {
    return num1 + num2;
}
console.log(addTwo(3, 5));
// mentioning data type for map function
var heros = ["hearo1", "hero2", "hero3", "hero4"];
heros.map(function (hero) {
    return "Hello" + hero;
    // return 1; --> show swiggly lines
});
// void type - if the function return nothing
function consoleError(errorMsg) {
    console.log("Error Msg", errorMsg);
}
// return nothing but throwing error message data type
function fail(msg) {
    throw new Error(msg);
}
