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



// // ZADANIA DOMOWE Z DNIA 05.06.2020
// // Adam Goździelewski

// // Zadanie 1: Funkcja która przy każdym wywołaniu pokazuje kolejną wartość silni
// function silniaCB(poziom, callback) {
//     let wynik = 1;
//     let liczby = [];

//     for(let i = 1; i <= poziom; i++) {
//         liczby.push(i);
//     }

//     liczby.forEach(function(value) {
//         wynik = wynik * value;
//     });

//     callback(wynik);
// }

// function counter() {
//     let a = 1;
//     return function () {
//         return a++;
//     }
// }

// count = counter();

// function print(val) {
//     console.log(val);
// }

// function silniaWlasciwa() {
//     let poziom = count();
//     silniaCB(poziom, print);
// }



// // Zadanie 2: Super Sum - funkcja dodająca kolejno podane argumenty
// function superSumGen(...numbers) {
//     let wynik = 0;

//     return function (...numbers) {
//         liczby = numbers;
//         liczby.forEach(function(value) {
//             wynik = wynik + value;
//         })
//         console.log(wynik)
//     }
// }

// let superSum = superSumGen();



// // Zadanie 3: Funkcja obliczająca silnię przy wykorzystaniu rekurencji
// function silniaRekurencja(n) {
//     if (n === 0) {
//         return 1;
//     }
//     else {
//         return n * silniaRekurencja(n-1);
//     }
// }



// // Zadanie: E-Dziennik
// let classes = [
//     [],
//     [],
//     [],
//     [],
//     [],
//     []
// ];

// function dodajOsobe(classNo, name) {
//     properClass = classNo - 1;
//     classes[properClass].push(name);
//     classes[properClass].sort();
// }

// function pobierzOsobe(classNo, studentNo) {
//     properClass = classNo - 1;
//     properStudentNo = studentNo - 1;
//     return classes[properClass][properStudentNo];
// }



// // 08.06.2020

// // Rozwiązanie zadania 1:
// function generujSilnie() {
//     let licznik = 0;
//     let wynik = 1;
//     wynik = wynik * licznik;

//     return function() {
//         licznik = licznik + 1;
//         console.log(licznik, wynik);
//     }
// }

// let silnia = generujSilnie();
// console.log(typeof silnia);

// // Rozwiązanie zadania 2:
// function genSum() {
//     let wynik = 0;
//     const subsum =  function(...rest) {
//         for (let i = 0; i < rest.length; i++) {
//             wynik = wynik + rest[i];
//         }
//         console.log(wynik);
//         return subsum;
//     }
//     return subsum;
// }
// let superSum = genSum();

// // Notatki z zajęć

// // TABLICZKA MNOŻENIA
// function tabliczka (x, y) {
//     axis = [];

//     for (let i = 0; i < y; i++) {
//         axis.push([]);
//     }

//     for (let i = 0; i < x; i++) {
//         for (let j = 0; j < y; j++) {
//             axis[i][j] = i * j;
//         }
//     }

//     return axis;
// }

// var tablica = tabliczka(4, 4)
// console.log(tablica)


// // Przykładowy Obiekt
// const zeZmiennej = "Zmienna.";

// const mojObiekt = {
//     imie: "Michał",
//     nazwisko: "Głuś",
//     odznaczenia: {
//         styczen1941: 'Medal za waleczność',
//         marzec1944: 'Order im. Łosia',
//     },
//     poziomy: [1, 2, 3, 4],
//     pole: zeZmiennej,
//     getThis: function() {
//         function lepszaFunkcja() {
//             console.log(this);
//         }
//         lepszaFunkcja();
//     },
// }
// console.log(mojObiekt)
// console.log(mojObiekt.poziomy)

// // function funkcja() {
// //     function lepszaFunkcja() {
// //         console.log(this);
// //     }
// //     lepszaFunkcja();
// // }

// mojObiekt.getThis();

// // Referencja
// var a = {
//     pole: 12,
// }

// b = a;
// console.log(a.pole, b.pole);
// b.pole = "Jarek";
// console.log(a.pole, b.pole);


// // Zadanie 1: Stwórz obiekt Human
// const Human = {
//     imie: "Michał",
//     nazwisko: "Głuś",
//     dataUrodzenia: new Date(1974, 8, 4),
//     plec: "M",
//     pesel: "7412038613019",
//     address: "ul. Zmienna 3/14, Pythonberg",
    
//     introduce: function() {
//         console.log(this.imie, this.nazwisko);
//     },

//     whereImFrom: function() {
//         console.log(this.address);
//     },

//     getPesel: function() {
//         console.log(this.pesel);
//     },

//     howOldAmI: function() {
//         let currentDate = Date.now();
//         let ageRaw = currentDate - this.dataUrodzenia;
//         year = 3.155695 * Math.pow(10, 10);
//         let age = Math.round(ageRaw / year);
//         console.log(age);
//     },

//     setPesel: function() {
//         // Funkcja zwraca numer PESEL zgodnie z wytycznymi dostępnymi na: https://www.gov.pl/web/gov/czym-jest-numer-pesel
//         let newPeselNumbers = [];

//         // Numery 1 i 2 z 11
//         let year = this.dataUrodzenia.getFullYear();
//         let yearOfBirth = parseInt(year.toString().substr(-2));
//         newPeselNumbers.push(yearOfBirth);

//         // Numery 3 i 4 z 11
//         let month = this.dataUrodzenia.getMonth() + 1;
//         if (month < 10) {
//             newPeselNumbers.push(0);
//         }
//         newPeselNumbers.push(month);

//         // Numery 5 i 6 z 11
//         let day = this.dataUrodzenia.getDay() + 1;
//         if (day < 10) {
//             newPeselNumbers.push(0);
//         }
//         newPeselNumbers.push(day);

//         // Numery 7, 8 i 9 z 11
//         const getRandomInt = function() {
//             return Math.floor(Math.random() * 10);
//         }
//         for (i = 0; i < 3; i++) {
//             newPeselNumbers.push(getRandomInt())
//         }

//         // Numer 10 z 11
//         const femaleNumbers = [0, 2, 4, 6, 8];
//         const maleNumbers = [1, 3, 5, 7, 9];
//         if (this.plec === "M") {
//             newPeselNumbers.push(maleNumbers[Math.floor(Math.random() * maleNumbers.length)]);
//         } else if (this.plec === "F" || "K") {
//             newPeselNumbers.push(femaleNumbers[Math.floor(Math.random() * femaleNumbers.length)]);
//         }
        
//         // Numer 11 z 11
//         let stringPesel = newPeselNumbers.join("");
//         let arrayPesel = stringPesel.split('').map(Number);
//         let multipliedNumbers = [];
//         multipliedNumbers.push(arrayPesel[0] * 1);
//         multipliedNumbers.push(arrayPesel[1] * 3);
//         multipliedNumbers.push(arrayPesel[2] * 7);
//         multipliedNumbers.push(arrayPesel[3] * 9);
//         multipliedNumbers.push(arrayPesel[4] * 1);
//         multipliedNumbers.push(arrayPesel[5] * 3);
//         multipliedNumbers.push(arrayPesel[6] * 7);
//         multipliedNumbers.push(arrayPesel[7] * 9);
//         multipliedNumbers.push(arrayPesel[8] * 1);
//         multipliedNumbers.push(arrayPesel[9] * 3);
//         let wynik = 0;
//         for (i = 0; i < multipliedNumbers.length; i++) {
//             wynik = wynik + multipliedNumbers[i];
//         }
//         let stringWynik = wynik.toString();
//         let lastDigit = parseInt(stringWynik.charAt(stringWynik.length - 1));
//         let controlDigit = 10 - lastDigit;
//         if (controlDigit === 10) {
//             controlDigit = 0;
//         }
//         arrayPesel.push(controlDigit);

//         // Korekta numeru 3 (oznaczenia miesiąca urodzenia) w zależności od roku urodzenia
//         if (1800 <= year && year <= 1899) {
//             arrayPesel[2] = arrayPesel[2] + 8;
//         } else if (2000 <= year && year <= 2099) {
//             arrayPesel[2] = arrayPesel[2] + 2;
//         } else if (2100 <= year && year <= 2199) {
//             arrayPesel[2] = arrayPesel[2] + 4;
//         } else if (2200 <= year && year <= 2299) {
//             arrayPesel[2] = arrayPesel[2] + 6;
//         }

//         // Złożenie zmiennej arrayPesel w kompletny numer PESEL
//         finalString = arrayPesel.join("");
//         finalPesel = parseInt(finalString);

//         // Zamiana wartości this.Pesel
//         this.pesel = finalPesel;

//         console.log("Numer PESEL został zaktualizowany. Nowy numer PESEL:", finalPesel);
//     },
// };

// // Testing
// Human.whereImFrom();
// Human.howOldAmI();
// Human.setPesel();
// console.log(Human.dataUrodzenia);
// Human.getPesel();

// // Zadanie 2: Przerób człowieka na prototype
// function Human(imie, nazwisko, dataUrodzenia, plec, address) {
//     this.imie = imie;
//     this.nazwisko = nazwisko;
//     this.dataUrodzenia = dataUrodzenia;
//     this.plec = plec;
//     this.pesel = 0;
//     this.address = address;
    
//     this.introduce = function() {
//         console.log(this.imie, this.nazwisko);
//     };

//     this.whereImFrom = function() {
//         console.log(this.address);
//     };

//     this.getPesel = function() {
//         console.log(this.pesel);
//     };

//     this.howOldAmI = function() {
//         let currentDate = Date.now();
//         let ageRaw = currentDate - this.dataUrodzenia;
//         year = 3.155695 * Math.pow(10, 10);
//         let age = Math.round(ageRaw / year);
//         console.log(age);
//     };

//     this.setPesel = function() {
//         // Funkcja zwraca numer PESEL zgodnie z wytycznymi dostępnymi na: https://www.gov.pl/web/gov/czym-jest-numer-pesel
//         let newPeselNumbers = [];

//         // Numery 1 i 2 z 11
//         let year = this.dataUrodzenia.getFullYear();
//         let yearOfBirth = parseInt(year.toString().substr(-2));
//         newPeselNumbers.push(yearOfBirth);

//         // Numery 3 i 4 z 11
//         let month = this.dataUrodzenia.getMonth() + 1;
//         if (month < 10) {
//             newPeselNumbers.push(0);
//         }
//         newPeselNumbers.push(month);

//         // Numery 5 i 6 z 11
//         let day = this.dataUrodzenia.getDay() + 1;
//         if (day < 10) {
//             newPeselNumbers.push(0);
//         }
//         newPeselNumbers.push(day);

//         // Numery 7, 8 i 9 z 11
//         const getRandomInt = function() {
//             return Math.floor(Math.random() * 10);
//         }
//         for (i = 0; i < 3; i++) {
//             newPeselNumbers.push(getRandomInt())
//         }

//         // Numer 10 z 11
//         const femaleNumbers = [0, 2, 4, 6, 8];
//         const maleNumbers = [1, 3, 5, 7, 9];
//         if (this.plec === "M") {
//             newPeselNumbers.push(maleNumbers[Math.floor(Math.random() * maleNumbers.length)]);
//         } else if (this.plec === "F" || "K") {
//             newPeselNumbers.push(femaleNumbers[Math.floor(Math.random() * femaleNumbers.length)]);
//         }
        
//         // Numer 11 z 11
//         let stringPesel = newPeselNumbers.join("");
//         let arrayPesel = stringPesel.split('').map(Number);
//         let multipliedNumbers = [];
//         multipliedNumbers.push(arrayPesel[0] * 1);
//         multipliedNumbers.push(arrayPesel[1] * 3);
//         multipliedNumbers.push(arrayPesel[2] * 7);
//         multipliedNumbers.push(arrayPesel[3] * 9);
//         multipliedNumbers.push(arrayPesel[4] * 1);
//         multipliedNumbers.push(arrayPesel[5] * 3);
//         multipliedNumbers.push(arrayPesel[6] * 7);
//         multipliedNumbers.push(arrayPesel[7] * 9);
//         multipliedNumbers.push(arrayPesel[8] * 1);
//         multipliedNumbers.push(arrayPesel[9] * 3);
//         let wynik = 0;
//         for (i = 0; i < multipliedNumbers.length; i++) {
//             wynik = wynik + multipliedNumbers[i];
//         }
//         let stringWynik = wynik.toString();
//         let lastDigit = parseInt(stringWynik.charAt(stringWynik.length - 1));
//         let controlDigit = 10 - lastDigit;
//         if (controlDigit === 10) {
//             controlDigit = 0;
//         }
//         arrayPesel.push(controlDigit);

//         // Korekta numeru 3 (oznaczenia miesiąca urodzenia) w zależności od roku urodzenia
//         if (1800 <= year && year <= 1899) {
//             arrayPesel[2] = arrayPesel[2] + 8;
//         } else if (2000 <= year && year <= 2099) {
//             arrayPesel[2] = arrayPesel[2] + 2;
//         } else if (2100 <= year && year <= 2199) {
//             arrayPesel[2] = arrayPesel[2] + 4;
//         } else if (2200 <= year && year <= 2299) {
//             arrayPesel[2] = arrayPesel[2] + 6;
//         }

//         // Złożenie zmiennej arrayPesel w kompletny numer PESEL
//         finalString = arrayPesel.join("");
//         finalPesel = parseInt(finalString);

//         // Zamiana wartości this.Pesel
//         this.pesel = finalPesel;

//         console.log("Numer PESEL został zaktualizowany. Nowy numer PESEL:", finalPesel);
//     }

//     this.setPesel();
// }

// // Testing
// let Blazej = new Human("Blazej", "Mierny", new Date(2102, 2, 24), "M", "Moskiewska 3, Gniew");
// console.log(Blazej);

// // Konstruktor
// function humanMaker(name, surname) {
//     this.name = name;
//     this.surname = surname;
//     this.introduce = function () {
//         console.log(this.name, this.surname);
//     }
// }

// michalek = humanMaker("Michał", "Głuś")
// introduce(michalek);



// // 10.06.2020

// // Klasy
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     sayYourName() {
//         console.log(`Mam na imię $(this.name).`);
//     }

//     get mamNaImie() {
//         return this.name;
//     }

//     static sayHi(name) {
//         console.log("Cześć,", name + "!");
//     }

//     metoda() {
//         this.sayYourName();
//     }
// }

// class Snake extends Animal {
//     sayYourName() {
//         console.log(`Jessstem ${this.name}.`);
//     }
// }

// const fujar = new Snake("Fujar");
// fujara.sayYourName();

// // bind
// function test() {
//     console.log(this.name)
// }

// test();

// const newTest = test.bind(
//     {name: "Super!"},
//     {para2: "Hi, mate!"}
// );

// newTest();

// function greet(greeting, name) {
//     console.log(greeting, name);
// }

// const greetWarmly = greet.bind("Witaj,", {});

// greetWarmly("Maciej");

// // setTimeout
// setInterval(function() {
//     let i = 0;
//     while (i < 1000) {
//         console.log("A");
//         i++;
//     }
// }, 100)

// const handler = setInterval(function() {
//     let i = 0;
//     while (i < 1000) {
//         console.log("A");
//         i++;
//     }
// }, 100)

// handler;
// clearInterval(handler);

// Zadania z dnia 10.06.2020
// Adam Goździelewski

// // Samochód, który co 1 sekundę robi wrr
// class Car {
//     constructor(name) {
//         this.name = name;
//         this.handler = null;
//     }

//     engine() {
//         console.log("Wrr!")
//     }

//     startEngine() {
//         this.handler = setInterval(this.engine, 1000);
//     }

//     stopEngine() {
//         clearInterval(this.handler);
//     }
// }

// fiat126 = new Car("Fiat 126");
// fiat126.startEngine();



// // Zadanie 1: Funkcja wypisująca od 0 do N liczb parzystych
// function giveEvens(n) {
//     for (i = 1; i <= n; i++) {
//         if (i%2 === 0) {
//             console.log(i);
//         }
//     }
// }
// giveEvens(12);

// // Zadanie 2: Funkcja dzieląca argumenty na 3 tablice w formie tablicy 2d:
// //            fajnaFunc(1,2,3,4,5,6) => [[1,4],[2,5],[3,6]]
// function every(arr, interval = 1, start = 0) {
//     let imported = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (i % interval === 0) {
//         imported.push(arr[i + start]);
//       }
//     }
//     solution = imported.filter(arg => arg != undefined)
//     return solution;
//   }

// function arrayMaker(...args) {
//     let solution = [];
//     let array1 = every(args, 3, 0);
//     let array2 = every(args, 3, 1);
//     let array3 = every(args, 3, 2);
//     solution.push(array1, array2, array3);
//     console.log(solution);
// }
// arrayMaker(1,2,3,4,5,6);



// Zadanie 3: Funkcja, która wyświetli N-ty wyraz ciągu
