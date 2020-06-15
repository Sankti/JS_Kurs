// Zadanie 1: Dodanie 5 przycisków do body przy użyciu JS
function przycisniecie() {
    console.log("Przyciśnięto!")
}
var container = document.createElement('div');
for (var i = 0; i < 5; i++) {
    var przycisk = document.createElement('p');
    przycisk.appendChild(document.createTextNode('Przycisk' + (i + 1)));
    przycisk.addEventListener("click", przycisniecie);
    container.appendChild(przycisk);
}
document.body.appendChild(container);



// Zadanie 2: Dodanie diva o wymiarach 100x100, który zmienia kolor co jakiś czas
let square = document.createElement('div');
square.style.height = "100px";
square.style.width = "100px";
square.style.backgroundColor = "beige";

var handler = setInterval(function () {
    if (square.style.backgroundColor === "beige") {
        square.style.backgroundColor = "maroon";
    } else if (square.style.backgroundColor === "maroon") {
        square.style.backgroundColor = "beige";
    }
}, 1000)

document.body.appendChild(square);



// Zadanie 3: Lista 5 elementów i ich modyfikacje
var items = document.createElement('p');
for (var i = 0; i < 5; i++) {
    var przycisk = document.createElement('p');
    przycisk.appendChild(document.createTextNode('Paragraf' + (i + 1)));
    
    items.appendChild(przycisk);
}
document.body.appendChild(items);

let paragraphs = document.querySelectorAll("p");

paragraphs[0].style.color = "maroon";
paragraphs[2].style.color = "magenta";
paragraphs[paragraphs.length - 1].style.color = "purple";



// Zadanie 4: Dodanie diva o wymiarach 100x100, który zmienia kolor gdy w niego klikniemy
let squarePushable = document.createElement('div');
squarePushable.style.height = "100px";
squarePushable.style.width = "100px";
squarePushable.style.backgroundColor = "beige";

function pushSquare() {
    if (squarePushable.style.backgroundColor === "beige") {
        squarePushable.style.backgroundColor = "maroon";
    } else if (squarePushable.style.backgroundColor === "maroon") {
        squarePushable.style.backgroundColor = "beige";
    }
}
squarePushable.addEventListener("click", pushSquare);
document.body.appendChild(squarePushable);



// Zadanie 5: Po wpisaniu tekstu w input (blur), pokaż alert (wartość z inputa)
let box = document.createElement('input');
box.setAttribute("type", "text");

function alertInput() {
    alert(box.value);
}
box.addEventListener("blur", alertInput());
document.body.appendChild(box);