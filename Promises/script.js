// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     reject("some error occur");
// });


function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if(getNextData) {
                getNextData();
            }
        }, 5000);
    });
} 