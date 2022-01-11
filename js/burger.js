// burger.js
console.log("burger.js is connected");

let header = document.querySelector("header");
let burgerBtn = document.getElementById("hamburger-menu");
let navList = document.getElementById("nav__list")
let burgerCondition = "closed";

navList.classList.add("display-none")

burgerBtn.onclick = function(){
    header.classList.toggle("burger-visible");
    console.log("burger condition changed");
    if (header.className === ""){
      navList.classList.add("display-none")
      navList.classList.remove("nav__list")
      navList.classList.add("nav__list")
    }else{
      navList.classList.remove("display-none")
    }
}

