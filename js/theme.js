// theme.js
console.log("theme.js is connected");

let themeBtn = document.getElementById("theme-btn");
let themeMoon = document.getElementById("theme-moon");
let themeSun = document.getElementById("theme-sun");
let themeCheck = 0;

themeBtn.onclick = function(){

  if(themeCheck = 0){
    document.body.classList.add("light-theme");
    console.log(themeCheck);
  }else{
    document.body.classList.add("dark-theme");
  }

  if(themeCheck = 0){
    themeCheck = 1
  }else{
    themeCheck = 0
  }
  console.log(themeCheck)

    themeMoon.classList.toggle("display-none");
    themeSun.classList.toggle("display-none");
    console.log("theme is changed")

  
  console.log(themeCheck)
}