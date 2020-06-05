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
    properClass = classNo - 1
    classes[properClass].push(name);
    classes[properClass].sort();
}

// Testing
dodajOsobe(2, "Charles")
dodajOsobe(2, "Andrei")

console.log(classes)
