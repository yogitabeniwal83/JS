function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("data", dataId);  
        resolve("success"); 
        if(getNextData){
            getNextData();
        }
    }, 2000);
    });
}



// using callback hell

// getData(1, () => {
//     console.log("getting data2 ....");
//     getData(2, () => {
//         console.log("getting data3....");
//         getData(3);
//     });
// });



// using promise chain

// getData(1)
//  .then((res) => {
//     return getData(2);
//     })
//     .then((res) => {
//         return getData(3);
//     }).then((res) => {
//         console.log(res);
//     });



// using async - await

// async function getAllData() {
//     console.log("getting data1....");
//     await getData(1);
//     console.log("getting data2....");
//     await getData(2);
//     console.log("getting data 3....");
//     await getData(3);

// }

// getAllData();


//  using IIFE

(async function() {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
})();