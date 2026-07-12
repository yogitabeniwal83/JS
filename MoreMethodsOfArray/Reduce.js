// sum of number

// let arr = [1, 2, 3, 4];

// const output = arr.reduce( (result, current) => {
//     return result + current;
// });

// console.log(output);  // 10




// find maximum number

let arr = [3, 7, 5, 9];

const output = arr.reduce( (result, current) => {
    return result > current ? result : current;
});

console.log(output);