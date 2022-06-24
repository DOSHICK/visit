//stack.js
let stackRequest = new XMLHttpRequest();
stackRequest.open("GET", "./json/stack.json", false);
stackRequest.send(null);
let stackObject = JSON.parse(stackRequest.responseText);
let stackArray = stackObject.rows;

let stackParser = new DOMParser()

let stackList = document.getElementById("stack__list"); 

function stackItemsCreate(){
  stackArray.map((value, key) => {
    let divCon = document.createElement("div");
    divCon.classList.add("stack__block");

    let svg = stackList.parseFromString(stringContainingXMLSource, "../img/icons-babel.svg")

    divCon.innerHTML =   svg  + "<h3 class=\"block__title\">"+ `${value.name}` +"</h3>";
    stackList .appendChild(divCon);
  })
}

stackItemsCreate()



