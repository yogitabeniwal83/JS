let btn1 = document.querySelector("#btn1");

btn1.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
};


let btn2 = document.querySelector("#btn2");

btn2.ondblclick = () => {
    console.log("button was clicked 2 times");
};


let div = document.querySelector("div");

div.onmouseover = () => {
    console.log("you are inside div");
};