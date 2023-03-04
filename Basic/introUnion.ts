let score: string | number;
score = 5;
score = "9303";

// score = false   ---> throw error as data type is string or number

//Type aliases

type User = {
    name: string;
    id: number;
};

type Admin = {
    username: string;
    id: number;
};

let Naganandhini: User | Admin = {
    name: "Nandhini",
    id: 42,
};

Naganandhini = {
    username: "Nandhini",
    id: 42,
};

// Naganandhini = {    --> not allowed as it is not a type
//     number1: 987,
//     id: 42,
// };

//Function

function getDBId(id: number | string) {
    if (typeof id === "string") {
        id.toLocaleUpperCase();
    }

    // id + 2 --> won't allow , check id is number or string

    if (typeof id === "number") {
        id + 2;
    }
}

//Array

const data1: number[] | string[] = [1, 2];
data1.push(1);

const data2: (string | number)[] = ["1", 1, 3, 5];

let pi: 3.14;

pi = 3.14;
// pi = 9.0  --> won't allow as it should be 3.14

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";

export {};
