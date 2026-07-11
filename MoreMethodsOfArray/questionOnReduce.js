let n = prompt("enter a number : ");

let arr = [];

 for(let i=1; i<=n; i++){
    arr[i-1] = i;
 }

 console.log(arr);

 let sum = arr.reduce( (result, current) => {
    return result + current;
 });

 console.log(sum);

  let product = arr.reduce( (result, current) => {
    return result * current;
 });

 console.log(product);