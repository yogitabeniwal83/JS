const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// using async - await
const getFacts = async() => {
    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response);     // JSON format
    let data = response.json();
    factPara.innerText = (data[0].text);
};

btn.addEventListener("click", getFacts);



// using promise chain 

// function getFacts() {
//     fetch(URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         factPara.innerText = data[1].text;
//     });
// }