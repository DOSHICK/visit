//portfolio.js
// console.log("portfolio.js is connected");

let portfolioList = document.getElementById("portfolio__list");
let portfolioArray = [
  // portfolioInsuranse = {
  //   id: 1,
  //   name: "insuranse",
  //   img: "./img/portfolio/insurance.png",
  //   techno: "HTML, SCSS, JS",
  //   link: "https://doshick.github.io/insurance/insurance/index.html"
  // },
  // portfolioTrafalgar = {
  //   id: 2,
  //   name: "Trafalgar",
  //   img: "./img/portfolio/trafalgar.png",
  //   techno: "HTML, CSS, jQuery, owlCarousel",
  //   link: "https://doshick.github.io/traffico/Trafalgar/pages/main.html"
  // },
  // portfolioKonstruct = {
  //   id: 3,
  //   name: "Konstruct",
  //   img: "./img/portfolio/konstruct.png",
  //   techno: "HTML, CSS",
  //   link: "https://doshick.github.io/konstruct/index.html"
  // },
  // portfolioParallax = {
  //   id: 4,
  //   name: "Parallax",
  //   img: "./img/portfolio/parallax.png",
  //   techno: "HTML, CSS, jQuery",
  //   link: "https://doshick.github.io/parallax/index.html"
  // },
  portfolioObjects = {
    id: 5,
    name: "Privilegia",
    img: "./img/portfolio/objects.png",
    techno: "HTML, SCSS, JS",
    link: "https://doshick.github.io/zacaz-21/pages/objects.html"
  },
  portfolioCircles = {
    id: 6,
    name: "Circles",
    img: "./img/portfolio/circles.png",
    techno: "HTML, SCSS, JS",
    link: "https://doshick.github.io/cirules/main.html"
  },
  portfolioTimer = {
    id: 7,
    name: "Timer",
    img: "./img/portfolio/timer.png",
    techno: "HTML, CSS, JS",
    link: "https://doshick.github.io/timer/"
  },
  portfolioTriumph = {
    id: 8,
    name: "Triumph",
    img: "./img/portfolio/triumph.png",
    techno: "HTML, SCSS, JS",
    link: "https://agentstvo-detektiva.ru/"
  },
  portfolioYarsanych = {
    id: 9,
    name: "yarsanych",
    img: "./img/portfolio/yarsanych.png",
    techno: "HTML, SCSS, JS",
    link: "https://yarsanych.com/"
  },
  portfolioPorten = {
    id: 10,
    name: "Porten",
    img: "./img/portfolio/porten.png",
    techno: "HTML, SCSS, JS",
    link: "https://doshick.github.io/porten/"
  }
];

let portfolioReversed = portfolioArray.reverse();




//Пперебор массива и вставка элементов
function displayPortfolio() {
  portfolioReversed.map((item, key) => {
    //Настройка .portfolio__item
    let liCon = document.createElement("li");
    liCon.classList.add("portfolio__item");

    //Настройка .portfolio__item img
    let imgCon = document.createElement("div");
    imgCon.classList.add("portfolio__img-container")
    let imgBl = document.createElement("img");
    imgBl.src = `${item.img}`;
    imgCon.appendChild(imgBl)

    //Настройка .portfolio__item-block
    let itemBlock = document.createElement("div");
    itemBlock.classList.add('portfolio__item-block')
    
    //Настройка .portfolio__item h4
    let titleCon = document.createElement("h4");
    titleCon.classList.add("portfolio__item-title");
    titleCon.innerHTML = `${item.name}`;

    //Настройка .portfolio__item p
    let technoCon = document.createElement("p");
    technoCon.classList.add("portfolio__description");
    technoCon.innerHTML = "Технологии: <br>";
    //Дополнение к .portfolio__item p -> .portfolio__item p span
    let technoSpan = document.createElement("span");
    technoSpan.innerHTML = `${item.techno}`;

    //Настройка .portfolio__item a
    let linkCon = document.createElement("a");
    linkCon.href = `${item.link}`;
    linkCon.target = "_blank"
    linkCon.innerHTML = "Просмотреть";

    //Создание элементов в HTML
    portfolioList.appendChild(liCon);
    liCon.appendChild(imgCon);
    itemBlock.appendChild(titleCon)
    itemBlock.appendChild(technoCon);
    technoCon.appendChild(technoSpan)
    itemBlock.appendChild(linkCon)
    liCon.appendChild(itemBlock)
  })
}


displayPortfolio()


