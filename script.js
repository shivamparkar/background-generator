let css = document.querySelector("h3");   //we are selecting query 
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");


const setGradient = () => {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
}                                    //using css and creating a function to change gradient color

color1.addeventListener("input", setGradient()); 

color2.addeventListener("input", setGradient());