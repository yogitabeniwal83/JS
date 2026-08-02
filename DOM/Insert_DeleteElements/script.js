let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);


let div = document.querySelector("div");
div.append(newBtn);




let para = document.querySelector("p");
para.after(newBtn);




let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new!</i>";

document.querySelector("body").prepend(newHeading);





para.remove();