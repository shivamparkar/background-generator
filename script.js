let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");


console.log("Color1:", color1); 
console.log("Color2:", color2); 
console.log("Body:", body); 


const setGradient = () => {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
};



color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
