// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Chlid extends Parent {

// }

//  let obj = new Chlid();



class Person {
    constructor(name) {
        this.species = "homo sapnies";
        this.name = name;
    }

    eat() {
        console.log("eat");
    }

    // sleep() {
    //     console.log("sleep");
    // }
}

class Engineer extends Person {
    constructor(name) {
        super(name);   // to invoke parent class constructor
        // this.branch = this.branch;

    }
   
    work() {
        console.log("solve problem, build something");
    }
}

let engObj = new Engineer("yogita");