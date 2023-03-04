let sampleFunction = (name: string, email: string, isPaid: boolean = false) => {
    return console.log(name, email, isPaid);
};

sampleFunction("Naganandhini", "naganandhini112@gmail.com");

// mention data tyoe for return value
function addTwo(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(addTwo(3, 5));

// mentioning data type for map function

let heros = ["hearo1", "hero2", "hero3", "hero4"];
heros.map((hero: string): string => {
    return "Hello" + hero;
    // return 1; --> show swiggly lines
});

// void type - if the function return nothing

function consoleError(errorMsg: string): void {
    console.log("Error Msg", errorMsg);
}

// return nothing but throwing error message data type

function fail(msg: string): never {
    throw new Error(msg);
}
export {};
