// ZADANIA DOMOWE Z DNIA 08.06.2020
// Adam Goździelewski

// Zadanie 1: Stwórz obiekt Human
const Human = {
    imie: "Michał",
    nazwisko: "Głuś",
    dataUrodzenia: new Date(1974, 8, 4),
    plec: "M",
    pesel: "7412038613019",
    address: "ul. Zmienna 3/14, Pythonberg",
    
    introduce: function() {
        console.log(this.imie, this.nazwisko);
    },

    whereImFrom: function() {
        console.log(this.address);
    },

    getPesel: function() {
        console.log(this.pesel);
    },

    howOldAmI: function() {
        let currentDate = Date.now();
        let ageRaw = currentDate - this.dataUrodzenia;
        year = 3.155695 * Math.pow(10, 10);
        let age = Math.round(ageRaw / year);
        console.log(age);
    },

    setPesel: function() {
        // Funkcja zwraca numer PESEL zgodnie z wytycznymi dostępnymi na: https://www.gov.pl/web/gov/czym-jest-numer-pesel
        let newPeselNumbers = [];

        // Numery 1 i 2 z 11
        let year = this.dataUrodzenia.getFullYear();
        let yearOfBirth = parseInt(year.toString().substr(-2));
        newPeselNumbers.push(yearOfBirth);

        // Numery 3 i 4 z 11
        let month = this.dataUrodzenia.getMonth() + 1;
        if (month < 10) {
            newPeselNumbers.push(0);
        }
        newPeselNumbers.push(month);

        // Numery 5 i 6 z 11
        let day = this.dataUrodzenia.getDay() + 1;
        if (day < 10) {
            newPeselNumbers.push(0);
        }
        newPeselNumbers.push(day);

        // Numery 7, 8 i 9 z 11
        const getRandomInt = function() {
            return Math.floor(Math.random() * 10);
        }
        for (i = 0; i < 3; i++) {
            newPeselNumbers.push(getRandomInt())
        }

        // Numer 10 z 11
        const femaleNumbers = [0, 2, 4, 6, 8];
        const maleNumbers = [1, 3, 5, 7, 9];
        if (this.plec === "M") {
            newPeselNumbers.push(maleNumbers[Math.floor(Math.random() * maleNumbers.length)]);
        } else if (this.plec === "F" || "K") {
            newPeselNumbers.push(femaleNumbers[Math.floor(Math.random() * femaleNumbers.length)]);
        }
        
        // Numer 11 z 11
        let stringPesel = newPeselNumbers.join("");
        let arrayPesel = stringPesel.split('').map(Number);
        let multipliedNumbers = [];
        multipliedNumbers.push(arrayPesel[0] * 1);
        multipliedNumbers.push(arrayPesel[1] * 3);
        multipliedNumbers.push(arrayPesel[2] * 7);
        multipliedNumbers.push(arrayPesel[3] * 9);
        multipliedNumbers.push(arrayPesel[4] * 1);
        multipliedNumbers.push(arrayPesel[5] * 3);
        multipliedNumbers.push(arrayPesel[6] * 7);
        multipliedNumbers.push(arrayPesel[7] * 9);
        multipliedNumbers.push(arrayPesel[8] * 1);
        multipliedNumbers.push(arrayPesel[9] * 3);
        let wynik = 0;
        for (i = 0; i < multipliedNumbers.length; i++) {
            wynik = wynik + multipliedNumbers[i];
        }
        let stringWynik = wynik.toString();
        let lastDigit = parseInt(stringWynik.charAt(stringWynik.length - 1));
        let controlDigit = 10 - lastDigit;
        if (controlDigit === 10) {
            controlDigit = 0;
        }
        arrayPesel.push(controlDigit);

        // Korekta numeru 3 (oznaczenia miesiąca urodzenia) w zależności od roku urodzenia
        if (1800 <= year && year <= 1899) {
            arrayPesel[2] = arrayPesel[2] + 8;
        } else if (2000 <= year && year <= 2099) {
            arrayPesel[2] = arrayPesel[2] + 2;
        } else if (2100 <= year && year <= 2199) {
            arrayPesel[2] = arrayPesel[2] + 4;
        } else if (2200 <= year && year <= 2299) {
            arrayPesel[2] = arrayPesel[2] + 6;
        }

        // Złożenie zmiennej arrayPesel w kompletny numer PESEL
        finalString = arrayPesel.join("");
        finalPesel = parseInt(finalString);

        // Zamiana wartości this.Pesel
        this.pesel = finalPesel;

        console.log("Numer PESEL został zaktualizowany. Nowy numer PESEL:", finalPesel);
    },
};

// Testing
Human.whereImFrom();
Human.howOldAmI();
Human.setPesel();
console.log(Human.dataUrodzenia);
Human.getPesel();



// Zadanie 2: Przerób człowieka na prototype
function Human(imie, nazwisko, dataUrodzenia, plec, address) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.dataUrodzenia = dataUrodzenia;
    this.plec = plec;
    this.pesel = 0;
    this.address = address;
    
    this.introduce = function() {
        console.log(this.imie, this.nazwisko);
    };

    this.whereImFrom = function() {
        console.log(this.address);
    };

    this.getPesel = function() {
        console.log(this.pesel);
    };

    this.howOldAmI = function() {
        let currentDate = Date.now();
        let ageRaw = currentDate - this.dataUrodzenia;
        year = 3.155695 * Math.pow(10, 10);
        let age = Math.round(ageRaw / year);
        console.log(age);
    };

    this.setPesel = function() {
        // Funkcja zwraca numer PESEL zgodnie z wytycznymi dostępnymi na: https://www.gov.pl/web/gov/czym-jest-numer-pesel
        let newPeselNumbers = [];

        // Numery 1 i 2 z 11
        let year = this.dataUrodzenia.getFullYear();
        let yearOfBirth = parseInt(year.toString().substr(-2));
        newPeselNumbers.push(yearOfBirth);

        // Numery 3 i 4 z 11
        let month = this.dataUrodzenia.getMonth() + 1;
        if (month < 10) {
            newPeselNumbers.push(0);
        }
        newPeselNumbers.push(month);

        // Numery 5 i 6 z 11
        let day = this.dataUrodzenia.getDay() + 1;
        if (day < 10) {
            newPeselNumbers.push(0);
        }
        newPeselNumbers.push(day);

        // Numery 7, 8 i 9 z 11
        const getRandomInt = function() {
            return Math.floor(Math.random() * 10);
        }
        for (i = 0; i < 3; i++) {
            newPeselNumbers.push(getRandomInt())
        }

        // Numer 10 z 11
        const femaleNumbers = [0, 2, 4, 6, 8];
        const maleNumbers = [1, 3, 5, 7, 9];
        if (this.plec === "M") {
            newPeselNumbers.push(maleNumbers[Math.floor(Math.random() * maleNumbers.length)]);
        } else if (this.plec === "F" || "K") {
            newPeselNumbers.push(femaleNumbers[Math.floor(Math.random() * femaleNumbers.length)]);
        }
        
        // Numer 11 z 11
        let stringPesel = newPeselNumbers.join("");
        let arrayPesel = stringPesel.split('').map(Number);
        let multipliedNumbers = [];
        multipliedNumbers.push(arrayPesel[0] * 1);
        multipliedNumbers.push(arrayPesel[1] * 3);
        multipliedNumbers.push(arrayPesel[2] * 7);
        multipliedNumbers.push(arrayPesel[3] * 9);
        multipliedNumbers.push(arrayPesel[4] * 1);
        multipliedNumbers.push(arrayPesel[5] * 3);
        multipliedNumbers.push(arrayPesel[6] * 7);
        multipliedNumbers.push(arrayPesel[7] * 9);
        multipliedNumbers.push(arrayPesel[8] * 1);
        multipliedNumbers.push(arrayPesel[9] * 3);
        let wynik = 0;
        for (i = 0; i < multipliedNumbers.length; i++) {
            wynik = wynik + multipliedNumbers[i];
        }
        let stringWynik = wynik.toString();
        let lastDigit = parseInt(stringWynik.charAt(stringWynik.length - 1));
        let controlDigit = 10 - lastDigit;
        if (controlDigit === 10) {
            controlDigit = 0;
        }
        arrayPesel.push(controlDigit);

        // Korekta numeru 3 (oznaczenia miesiąca urodzenia) w zależności od roku urodzenia
        if (1800 <= year && year <= 1899) {
            arrayPesel[2] = arrayPesel[2] + 8;
        } else if (2000 <= year && year <= 2099) {
            arrayPesel[2] = arrayPesel[2] + 2;
        } else if (2100 <= year && year <= 2199) {
            arrayPesel[2] = arrayPesel[2] + 4;
        } else if (2200 <= year && year <= 2299) {
            arrayPesel[2] = arrayPesel[2] + 6;
        }

        // Złożenie zmiennej arrayPesel w kompletny numer PESEL
        finalString = arrayPesel.join("");
        finalPesel = parseInt(finalString);

        // Zamiana wartości this.Pesel
        this.pesel = finalPesel;

        console.log("Numer PESEL został zaktualizowany. Nowy numer PESEL:", finalPesel);
    }

    this.setPesel();
}

// Testing
let Blazej = new Human("Blazej", "Mierny", new Date(2102, 2, 24), "M", "Moskiewska 3, Gniew");
console.log(Blazej);