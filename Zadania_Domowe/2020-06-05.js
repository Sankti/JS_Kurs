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

// Testing
dodajOsobe(2, "Charles")
dodajOsobe(2, "Andrei")

console.log(classes)

console.log(pobierzOsobe(2, 1))
