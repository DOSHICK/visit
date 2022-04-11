// burger.js
// console.log("burger.js is connected");

let header = document.querySelector("header");
let burgerBtn = document.getElementById("hamburger-menu");
let navList = document.getElementById("nav__list");
let navLink = navList.querySelectorAll("a.nav__link");
let burgerCondition = "closed";


function burgerVisibility() {
  header.classList.toggle("burger-visible");
  if (header.className === "") {
    navList.classList.add("display-none")
    navList.classList.remove("nav__list")
    navList.classList.add("nav__list")
  } else {
    navList.classList.remove("display-none")
  }
}

burgerBtn.onclick = function () {
  burgerVisibility()
}

function checkResolution() {
  if (window.matchMedia("(min-width: 500px)").matches) {
    burgerBtn.classList.add("display-none");
    navList.classList.remove("display-none")
  } else {
    burgerBtn.classList.remove("display-none")
    navList.classList.add("display-none")
  }
}
checkResolution()

document.addEventListener("DOMContentLoaded", function () {
  for (let navLinkCounter = 0; navLinkCounter < navLink.length; navLinkCounter++) {
    navLink[navLinkCounter].onclick = function () {
      burgerVisibility();
      checkResolution();
    }
  }
});


window.addEventListener("resize", function () {
  checkResolution();
});

