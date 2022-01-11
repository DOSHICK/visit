// burger.js
console.log("burger.js is connected");

let header = document.querySelector("header");
let burgerBtn = document.getElementById("hamburger-menu");
let navList = document.getElementById("nav__list");
let link = document.querySelectorAll("li.nav__item > a")
let burgerCondition = "closed";

function burgerVisibility(){
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

link.onclick = function(){
  // burgerVisibility();
  alert("hola")
}

burgerBtn.onclick = function(){
  burgerVisibility();
}

  if (window.matchMedia("(min-width: 500px)").matches) {
    console.log("all ok")
    burgerBtn.classList.add("display-none")
  } else {
    navList.classList.add("display-none")
  }


