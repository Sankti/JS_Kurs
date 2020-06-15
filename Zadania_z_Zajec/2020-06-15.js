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