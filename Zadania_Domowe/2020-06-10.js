// Zadania z dnia 10.06.2020
// Adam Goździelewski

// Zadanie: Samochód, który co 1 sekundę robi wrr
class Car {
    constructor(name) {
        this.name = name;
        this.handler = null;
    }
    engine() {
        console.log("Wrr!")
    }
    startEngine() {
        this.handler = setInterval(this.engine, 1000);
    }
    stopEngine() {
        clearInterval(this.handler);
    }
}

fiat126 = new Car("Fiat 126");
fiat126.startEngine();



// Zadanie 1: Funkcja wypisująca od 0 do N liczb parzystych
function giveEvens(n) {
    for (i = 1; i <= n; i++) {
        if (i%2 === 0) {
            console.log(i);
        }
    }
}
giveEvens(12);



// Zadanie 2: Funkcja dzieląca argumenty na 3 tablice w formie tablicy 2d:
//            fajnaFunc(1,2,3,4,5,6) => [[1,4],[2,5],[3,6]]
function every(arr, interval = 1, start = 0) {
    let imported = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % interval === 0) {
        imported.push(arr[i + start]);
      }
    }
    solution = imported.filter(arg => arg != undefined)
    return solution;
  }

function arrayMaker(...args) {
    let solution = [];
    let array1 = every(args, 3, 0);
    let array2 = every(args, 3, 1);
    let array3 = every(args, 3, 2);
    solution.push(array1, array2, array3);
    console.log(solution);
}
arrayMaker(1,2,3,4,5,6);