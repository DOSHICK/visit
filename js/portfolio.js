//portfolio.js
console.log("portfolio.js is connected");


let portfolioList = document.getElementById("portfolio__list"); 
let portfolioArray = [
  portfolio_1 = {
    id: 1,
    name: "Timer",
    img: "./img/portfolio/timer.png",
    techno: "HTML, CSS, JS",
    link: "https://doshick.github.io/timer/"
  },
  portfolio_2 = {
    id: 2,
    name: "Timer",
    img: "./img/portfolio/timer.png",
    techno: "HTML, CSS, JS",
    link: "https://doshick.github.io/timer/"
  },
  portfolio_3 = {
    id: 3,
    name: "Timer",
    img: "./img/portfolio/timer.png",
    techno: "HTML, CSS, JS",
    link: "https://doshick.github.io/timer/"
  },
];




//Пперебор массива и вставка элементов
for (let portfolioCounter = 1; portfolioCounter <= portfolioArray.length; portfolioCounter++) {
  //Получение значений из массива
  let searchTerm = portfolioCounter;
  let portfolioTitle = portfolioArray.find(item => item.id === searchTerm).name;
  let portfolioImg = portfolioArray.find(item => item.id === searchTerm).img;
  let portfolioTechno = portfolioArray.find(item => item.id === searchTerm).techno;
  let portfolioLink = portfolioArray.find(item => item.id === searchTerm).link;


  //Настройка .portfolio__item
	let liCon = document.createElement("li");
  liCon.classList.add("portfolio__item");

  //Настройка .portfolio__item
  let imgCon = document.createElement("img");
  imgCon.src =  portfolioImg;

  //Настройка .portfolio__item h4
  let titleCon = document.createElement("h4");
  titleCon.classList.add("portfolio__item-title");
  titleCon.innerHTML = portfolioTitle;

  //Настройка .portfolio__item p
  let technoCon = document.createElement("p");
  technoCon.classList.add("portfolio__description");
  technoCon.innerHTML = "Технологии <br>";
  //Дополнение к .portfolio__item p -> .portfolio__item p span
  let technoSpan = document.createElement("span");
  technoSpan.innerHTML = portfolioTechno;
  
  //Настройка .portfolio__item a
  let linkCon = document.createElement("a");
  linkCon.href = portfolioLink;
  linkCon.target = "_black"
  linkCon.innerHTML = "Просмотреть на странице";
  
  //Создание элементов в HTML
	portfolioList.appendChild(liCon);
  liCon.appendChild(imgCon);
  liCon.appendChild(titleCon);
  liCon.appendChild(technoCon);
  technoCon.appendChild(technoSpan)
  liCon.appendChild(linkCon)
};






