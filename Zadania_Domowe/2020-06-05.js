// ZADANIA DOMOWE Z DNIA 05.06.2020
// Adam Goździelewski

// Zadanie 1: Funkcja która przy każdym wywołaniu pokazuje kolejną wartość silni
function silniaCB(poziom, callback) {
    let wynik = 1;
    let liczby = [];

    for(let i = 1; i <= poziom; i++) {
        liczby.push(i);
    }

    liczby.forEach(function(value) {
        wynik = wynik * value;
    });

    callback(wynik);
}
function counter() {
    let a = 1;
    return function () {
        return a++;
    }
}

count = counter();

function print(val) {
    console.log(val);
}

function silniaWlasciwa() {
    let poziom = count();
    silniaCB(poziom, print);
}



// Zadanie 2: Super Sum - funkcja dodająca kolejno podane argumenty
function superSumGen(...numbers) {
    let wynik = 0;

    return function (...numbers) {
        liczby = numbers;
        liczby.forEach(function(value) {
            wynik = wynik + value;
        })
        console.log(wynik)
    }
}

let superSum = superSumGen();



// Zadanie 3: Funkcja obliczająca silnię przy wykorzystaniu rekurencji
function silniaRekurencja(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * silniaRekurencja(n-1);
    }
}



// Zadanie: E-Dziennik
let classes = [
    [],
    [],
    [],
    [],
    [],
    []
];

function dodajOsobe(classNo, name) {
    properClass = classNo - 1;
    classes[properClass].push(name);
    classes[properClass].sort();
}

function pobierzOsobe(classNo, studentNo) {
    properClass = classNo - 1;
    properStudentNo = studentNo - 1;
    return classes[properClass][properStudentNo];
}
