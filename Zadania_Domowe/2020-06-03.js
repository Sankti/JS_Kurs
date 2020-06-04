// ZADANIA DOMOWE Z DNIA 03.06.2020
// Adam Goździelewski

// Zadanie 1: Funkcja mnożąca 2 podane liczby
function multiply(a, b) {
    return a * b;
}

// Zadanie 2: Funkcja sprawdzająca czy liczba jest parzysta
function isEven(a) {
    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// Zadanie 3: Funkcja zwracająca sumę dowolnej ilości argunemtów
function addUp(a = 0, b = 0, c=0, ...rest) {
    let sum = 0;
    const argumentsArray = arguments;
    for (let i = 0; i < argumentsArray.length; i++) {
        sum += argumentsArray[i];
    }
    return sum;
}

// Zadanie 4: Funkcja zwracająca wszystkie parzyste liczby spośród argumentów
function evenOnly(a, b, c, ...rest) {
    const argumentsArray = arguments;
    const evenNumbers = [];
    for (let i = 0; i < argumentsArray.length; i++) {
        if (isEven(argumentsArray[i]) === true) {
            evenNumbers.push(argumentsArray[i])
        }
    }
    return evenNumbers;
}