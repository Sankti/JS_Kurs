// TABLICZKA MNOŻENIA
function tabliczka (x, y) {
    axis = [];

    for (let i = 0; i < y; i++) {
        axis.push([]);
    }

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            axis[i][j] = i * j;
        }
    }

    return axis;
}

var tablica = tabliczka(4, 4)
console.log(tablica)