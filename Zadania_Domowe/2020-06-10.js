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



// Zadanie 3: Funkcja, która wyświetli N-ty wyraz ciągu
function sequenceBase(n) {
    return n + 1;
}
function sequence(n) {
    if (n < 3) {
        solution = n + 1;
    } else {
    solution = sequenceBase(n-1) * n + sequenceBase(n-2)/sequenceBase(n-3);
    }
    return solution;
}

// Testing
console.log(sequence(0));
console.log(sequence(1));
console.log(sequence(2));
console.log(sequence(3));
console.log(sequence(4));
console.log(sequence(12));



// Zadanie 4: Funkcja, która doda/usunie/wyświetli osobę z tablicy obiektów
function Person(id, name, surname) {
    this.id = id;
    this.name = name;
    this.surname = surname;
}
masterSheet = []
function dodajOsobe(id, name, surname) {
    osoba = new Person(id, name, surname);
    masterSheet[id] = osoba;
    console.log(osoba);
}
function usunOsobe(id) {
    masterSheet.splice(id, 1);
}

// Testing
console.log(masterSheet);
dodajOsobe(2, "Zbigniew", "Szrapnel");
dodajOsobe(12, "Łukasz", "Łój");
dodajOsobe(18, "Mariusz", "Poniedzielny");
usunOsobe(12);
console.log(masterSheet);



// Zadanie 5: Obiekt, który po N sekund wyświetli alert, który można anulować
function Alert(id, text, time) {
    this.id = id;
    this.text = text;
    this.time = time;
}

const alertBase = {
    alerts: [],
    handler: null,

    wyswietlAlert(id, text, time) {
        this.alerts[id] = new Alert(id, text, time);

        this.handler = setTimeout(
            function() {
            console.log(alertBase.alerts[id].text);
            }, alertBase.alerts[id].time
        );
    },

    anulujAlert(id) {
        this.alerts.splice(id, 1);
        clearTimeout(this.handler);
    }
}

// Testing
alertBase.wyswietlAlert(3, "Cześć.", 3000);
alertBase.anulujAlert(3);
console.log(alertBase.alerts);