// Zadania z dnia 15.06.2020
// Adam Goździelewski

// Zadanie: 3 przyciski, które zliczają swoje kliknięcia oraz całkowitą ilość kliknięć
const masterCounter = {
    count: 0
}

makeMasterDiv = () => {
    masterDiv = document.createElement("button");
    masterDiv.classList.add("button");
    masterDiv.style.width = "250px";
    masterDiv.style.height = "250px";
    masterDiv.style.backgroundColor = "pink";
    masterDiv.style.margin = "10px";
    document.body.appendChild(masterDiv);

    let count = masterCounter.count;
    let textbox = document.createElement("p");
    textbox.classList.add("master");
    textbox.innerHTML = count;
    textbox.style.fontSize = "50px";
    textbox.style.color = "beige";
    masterDiv.appendChild(textbox);
}

masterCount = () => {
    masterCounter.count += 1;
    master = document.querySelector(".master");
    master.innerHTML = masterCounter.count;
}

makeButton = () => {
let button = document.createElement("button");
    button.classList.add("button");
    button.style.width = "250px";
    button.style.height = "250px";
    button.style.backgroundColor = "maroon";
    button.style.margin = "10px";
    document.body.appendChild(button);

    let count = 0
    let textbox = document.createElement("p");
    textbox.innerHTML = count;
    textbox.style.fontSize = "50px";
    textbox.style.color = "beige";
    button.appendChild(textbox);

    pushButton = () => {
        console.log("Wduszono przycisk.")
        count = count + 1;
        textbox.innerHTML = count;
        masterCount();
    }
    button.addEventListener("click", pushButton);
}

makeMasterDiv();
makeButton();
makeButton();