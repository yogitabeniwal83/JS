let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", (e) => {
    console.log("button was clicked - handler1");
    console.log(e);
    console.log(e.type);
    console.log(e.target); 
});


btn1.addEventListener("click", () => {
    console.log("button was clicked - handler2");
});


const handler3 =  () => {
    console.log("button was clicked - handler3");
};

btn1.addEventListener("click", handler3);


btn1.addEventListener("click", () => {
    console.log("button was clicked - handler4");
});


btn1.removeEventListener("click", handler3); 