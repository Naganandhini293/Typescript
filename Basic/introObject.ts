const User = {
    name: "nan",
    email: "nan@gmail.com",
    isActive: true,
};

// function with param as object type

function createUser({ name: string, isActive: boolean }): {} {
    return {};
}
let user = {
    name: "Nanana",
    isActive: false,
};
createUser({ name: "Nana", isActive: true });
createUser(user);

// function with param and return as object type
function createUser1({ name: string, isActive: boolean }): { name: string } {
    return { name: "Nana" };
}

let user1 = {
    name: "nannana",
    isActive: false,
    email: "nanananana@gmail.com",
};

createUser1(user1); //-> doesn't show any swiggly line as we send extra params

// Type aliases

type User = {
    name: string;
    email: string;
    isActive: boolean;
};
function createUser2(user: User): User {
    return user;
}
createUser2({ name: "nandhini", email: "naga@gmail.com", isActive: true });
export {};

// Type aliases with read only
type User2 = {
    readonly _id: string;
    name: string;
    isActive: boolean;
    creditCardDetails?: "string"; //->optional param
};

let myUser: User2 = {
    _id: "abdf",
    name: "abc",
    isActive: false,
};

// myUser._id = "yhu"  -> never allow as it is declared as read only

myUser.name = "jgkjfdlkjg";

// coimbining aliases

type cardNumber = {
    cardnumber: number;
};

type cardName = {
    cardName: string;
};

type cardDetails = cardNumber &
    cardName & {
        ccv: number;
    };

let cardDetail: cardDetails = {
    cardName: "name",
    cardnumber: 890839393093,
    ccv: 679,
};

//Array

const superHeros: string[] = [];
superHeros.push("Spider");
const superPower: Array<number> = [];
superPower.push(1);
export {};

const allUser: User[] = [];

allUser.push({ name: "nana", email: "anan@gmail.com", isActive: false });
