let myObj = {
    name: "David",
    surname: "Tezelashvili",
    academy: "GOA",
    isMentor: true,
    num: 100,
    hobbies: ["programming", "bike", "basketball"],
    favColor: "Blue"
}

let ul = document.getElementById("myList");

for (let key in myObj) {
    let liKey = document.createElement("li");
    liKey.textContent = key;

    let liValue = document.createElement("li");
    liValue.textContent = myObj[key];

    ul.appendChild(liKey);
    ul.appendChild(liValue);
}