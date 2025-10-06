// logical operator

let a = 6;
let b = 5;

let cond1 = a > b;//true
let cond2 = a === 6;//true

console.log("cond1 && cond2", cond1 && cond2);//true

let cond3 = a > b;//true
let cond4 = a === b;//false

console.log("cond3 && cond4", cond3 && cond4);//false

 let cond5 = a < b;//false
 let cond6 = a <= b;//false

 console.log("cond5 && cond6", cond5 && cond6);//false

 console.log("cond3 || cond4", cond3 || cond4);//true

 console.log("!(6 < 5)" , !(a < b));//false
 console.log("!(6 > 5)" , !(a > b));//true