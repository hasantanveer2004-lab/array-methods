
let fruits = ["Apple", "Banana", "Mango", "Orange"];

function displayFruits() {
    let list = document.getElementById("fruitList");

    list.innerHTML = "";

    fruits.forEach(function(fruit) {
        let li = document.createElement("li");
        li.textContent = fruit;
        list.appendChild(li);
    });
}

// Add new fruit (push)
function addFruit() {
    let input = document.getElementById("fruitInput");
    let fruit = input.value.trim();

    if (fruit === "") {
        alert("Please enter a fruit name!");
        return;
    }

    fruits.push(fruit);

    input.value = "";
    displayFruits();
    showOutput("Fruit added successfully!");
}

// Remove last fruit (pop)
function removeLast() {
    let removed = fruits.pop();

    displayFruits();
    showOutput("Removed: " + (removed || "No fruit available"));
}

// Remove first fruit (shift)
function removeFirst() {
    let removed = fruits.shift();

    displayFruits();
    showOutput("Removed: " + (removed || "No fruit available"));
}

// Sort array
function sortFruits() {
    fruits.sort();

    displayFruits();
    showOutput("Fruits sorted alphabetically!");
}

// Reverse array
function reverseFruits() {
    fruits.reverse();

    displayFruits();
    showOutput("Fruits reversed!");
}

// Array length
function showLength() {
    showOutput("Total fruits: " + fruits.length);
}

// Map method
function showUppercase() {
    let result = fruits.map(function(fruit) {
        return fruit.toUpperCase();
    });

    showOutput("Uppercase: " + result.join(", "));
}

// Filter method
function filterFruits() {
    let result = fruits.filter(function(fruit) {
        return fruit.length > 5;
    });

    showOutput("Fruits with more than 5 letters: " + result.join(", "));
}

// Join method
function joinFruits() {
    let result = fruits.join(" - ");

    showOutput(result);
}

// Display output
function showOutput(message) {
    document.getElementById("output").textContent = message;
}

// Initial display
displayFruits();
