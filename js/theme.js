// theme.js
// console.log("theme.js is connected");

let body = document.querySelector("body");
let themeBtn = document.getElementById("theme-btn");
let themeMoon = document.getElementById("theme-moon");
let themeSun = document.getElementById("theme-sun");
let themeCurrent = "light";

themeBtn.onclick = function(){

  if(themeCurrent = "light"){
    body.classList.toggle("dark-theme");
    themeCurrent = "dark"
  }else{
    body.classList.toggle('dark-theme');
    themeCurrent = "light"
  }
    themeSun.classList.toggle("display-none");
    themeMoon.classList.toggle("display-none");
}