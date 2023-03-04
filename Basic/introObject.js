"use strict";
exports.__esModule = true;
var User = {
    name: "nan",
    email: "nan@gmail.com",
    isActive: true
};
// function with param as object type
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
    return {};
}
var user = {
    name: "Nanana",
    isActive: false
};
createUser({ name: "Nana", isActive: true });
createUser(user);
// function with param and return as object type
function createUser1(_a) {
    var string = _a.name, boolean = _a.isActive;
    return { name: "Nana" };
}
var user1 = {
    name: "nannana",
    isActive: false,
    email: "nanananana@gmail.com"
};
createUser1(user1); //-> doesn't show any swiggly line as we send extra params
function createUser2(user) {
    return user;
}
createUser2({ name: "nandhini", email: "naga@gmail.com", isActive: true });
var myUser = {
    _id: "abdf",
    name: "abc",
    isActive: false
};
// myUser._id = "yhu"  -> never allow as it is declared as read only
myUser.name = "jgkjfdlkjg";
