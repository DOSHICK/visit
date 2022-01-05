// theme.js
console.log("theme.js is connected");

let main = document.querySelector("main");
let themeBtn = document.getElementById("theme-btn");
let themeMoon = document.getElementById("theme-moon");
let themeSun = document.getElementById("theme-sun");
let themeCurrent = "light";

themeBtn.onclick = function(){

  if(themeCurrent = "light"){
    main.classList.toggle("dark-theme");
    console.log("theme changed to dark");
    themeCurrent = "dark"
  }else{
    main.classList.toggle('dark-theme');
    console.log("theme changed to light");
    themeCurrent = "light"
  }
    themeSun.classList.toggle("display-none");
    themeMoon.classList.toggle("display-none");
    console.log("theme is changed")
  
  console.log(themeCurrent)
}