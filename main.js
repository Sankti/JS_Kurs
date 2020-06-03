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


function sum(a = 0, b = 0, c = 0, ...rest) {
    return a + b + c;
}

var result = sum(1, 2);
console.log(result);