//Получаем элемент фона с деревом
const paralaxItems = document.querySelectorAll('.paralax-item')

//При движении мышью вызываем функцию, которая меняет положение фона
document.addEventListener("mousemove", function (e) { moveParalaxPieces(e); });

function moveParalaxPieces(e) {
  let offsetX = (e.clientX / window.innerWidth * 30);
  let offsetY = (e.clientY / window.innerHeight * 10);

  for (let index = 0; index < paralaxItems.length; index++) {
    const element = paralaxItems[index];
    element.setAttribute("style", "transform: translateX(" + offsetX + "px)" + "translateY(" + offsetY + 'px)');
  }

}