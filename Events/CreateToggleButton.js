let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currentMode = "light";

modeBtn.addEventListener("click", () => {
    if(currentMode === "light") {
        currentMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        // document.querySelector("body").style.backgroundColor = "black";
    }
    else {
        currentMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        // document.querySelector("body").style.backgroundColor = "white"; 
    }

    console.log(currentMode);
});