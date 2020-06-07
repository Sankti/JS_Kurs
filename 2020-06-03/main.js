// Kurs JS
// 03.06.2020

// var age = 24
// var name = "Carol"
// var sex = "female"
// var hobby = "D&D"
// console.log(age, name, sex, hobby)

// function checkVar() {
//     let testVar = 30;
//     console.log("przed ifem " + testVar);
//     if(true) {
//         let testVar = 80;
//         console.log("W ifie: " + testVar);
//     }
//     console.log("za ifem " + testVar);
// }
// checkVar();

// var zmienna = 3

// if (zmienna == 5) {
//     alert("Zmienna to 5.")
// } else {
//     alert("Zmienna nie jest 5.")
// }

// switch (zmienna) {
//     case 5:
//         console.log("Zmienna to nadal 5.");
//         break;
//     case 6:
//         console.log("Zmienna to 6!");
//         break;
//     default:
//         console.log("Nie wiem, co to za zmienna.");
//         break;
// }

// for (let index = 0; index < 5; index++) {
//     console.log("Przygotuj kubek nr " + index + ".");
//     console.log("Wrzuć saszetkę herbaty do kubka.");
//     console.log("Zalej kubek gorącą wodą.");
// }

// var i = 0;
// while (i < 5) {
//     console.log("Próba numer", i++)
// }

// function zrobHerbate(index) {
//     for (index > 0; index--;) {
//         console.log("Przygotuj kubek nr " + index + ".");
//         console.log("Wrzuć saszetkę herbaty do kubka.");
//         console.log("Zalej kubek gorącą wodą.");
//     }
// }

// zrobHerbate(3)


// function sum(a = 0, b = 0, c = 0, ...rest) {
//     return a + b + c;
// }

// var result = sum(1, 2);
// console.log(result);



// ZADANIA DOMOWE Z DNIA 03.06.2020
// Adam Goździelewski

// // Zadanie 1: Funkcja mnożąca 2 podane liczby
// function multiply(a, b) {
//     return a * b;
// }

// // Zadanie 2: Funkcja sprawdzająca czy liczba jest parzysta
// function isEven(a) {
//     if (a % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // Zadanie 3: Funkcja zwracająca sumę dowolnej ilości argunemtów
// function addUp(a = 0, b = 0, c=0, ...rest) {
//     let sum = 0;
//     const argumentsArray = arguments;
//     for (let i = 0; i < argumentsArray.length; i++) {
//         sum += argumentsArray[i];
//     }
//     return sum;
// }

// // Zadanie 4: Funkcja zwracająca wszystkie parzyste liczby spośród argumentów
// function evenOnly(a, b, c, ...rest) {
//     const argumentsArray = arguments;
//     const evenNumbers = [];
//     for (let i = 0; i < argumentsArray.length; i++) {
//         if (isEven(argumentsArray[i]) === true) {
//             evenNumbers.push(argumentsArray[i])
//         }
//     }
//     return evenNumbers;
// }



// 05.06.2020

// function callbackTest(cb) {
//     console.log("Zainicjowano ciężkie zadanie.");
//     setTimeout(function () {
//         var magicznaLiczba = Math.random() * 1000;
//         cb(magicznaLiczba);
//     }), 5000
// }

// callbackTest(function (a) {
//     console.log("Zadanie dobiegło końca:", a);
//     }
// );

// const tablicaStolic = [
//     ["Polska", "Rosja", "USA"],
//     ["Warszawa", "Moskwa", "Waszyngton"]
// ];

// function podajStolice() {
//     console.log("Stolicą państwa", tablicaStolic[0][0], "jest", tablicaStolic[1][0] + ".");
//     console.log("Stolicą państwa", tablicaStolic[0][1], "jest", tablicaStolic[1][1] + ".");
//     console.log("Stolicą państwa", tablicaStolic[0][2], "jest", tablicaStolic[1][2] + ".");
// }

// podajStolice()



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