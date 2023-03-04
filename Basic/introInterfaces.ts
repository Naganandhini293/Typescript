interface User {
    readonly dbId: number;
    userId: string;
    email: string;
    googleId?: number;
    // startTrail:()=> string,
    startTrail(): string;
    getCoupon(couponName: string, couponToken: number): number;
}

interface User {
    //===>reopening inteface
    gitHubId: string;
}

let Naganandhini: User = {
    dbId: 22,
    userId: "hgssjkfsdy",
    email: "nana=dhini@gmail.com",
    gitHubId: "kjfdhkjdfk",
    startTrail() {
        return "Trail Started";
    },
    getCoupon(couponName = "couponName") {
        return 1;
    },
};

//Inteface Inheritance
interface Admin extends User {
    role: "Admin" | "Staff" | "Learner";
}

let Nandhini: Admin = {
    dbId: 22,
    userId: "hgssjkfsdy",
    email: "nana=dhini@gmail.com",
    gitHubId: "kjfdhkjdfk",
    role: "Admin",
    startTrail() {
        return "Trail Started";
    },
    getCoupon(couponName = "couponName") {
        return 1;
    },
};

export {};
