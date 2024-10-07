"use strict";
// Proměnné s explicitním typem
let FullName = "John Doe";
let age = 25;
let isStudent = true;
let numbers = [1, 2, 3, 4, 5];
// Funkce multiply
function multiply(a, b, showResult) {
    const result = a * b;
    if (showResult) {
        console.log(result);
    }
    return result;
}
// Testování funkce multiply
multiply(3, 4, true); // Vypíše 12
const result = multiply(5, 6); // Vrátí 30, ale nic nevypíše
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
let fullNameResult = getFullName("John", "Doe");
console.log(fullNameResult);
// Proměnná typu Car
const myCar = {
    make: "Tesla",
    model: "Cybertruck",
    year: 2023
};
// Vypisování značky a modelu auta
console.log(`Car make: ${myCar.make}, model: ${myCar.model}`);
// Funkce greet s volitelným parametrem greeting
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
// Testování funkce greet
console.log(greet("Alice")); // Vypíše "Hello, Alice!"
console.log(greet("Bob", "Hi")); // Vypíše "Hi, Bob!"
// Funkce printId, která přijímá id různých typů
function printId(id) {
    if (typeof id === 'number') {
        console.log(`ID is a number: ${id}`);
    }
    else {
        console.log(`ID is a string: ${id}`);
    }
}
// Testování funkce printId
printId(123); // Vypíše "ID is a number: 123"
printId("ABC123"); // Vypíše "ID is a string: ABC123"
// Funkce identity s použitím generik
function identity(arg) {
    return arg;
}
// Testování funkce identity s různými typy
const num = identity(10); // Vrátí 10
const str = identity("Hello"); // Vrátí "Hello"
const arr = identity([1, 2, 3]); // Vrátí [1, 2, 3]
console.log(num); // Vypíše 10
console.log(str); // Vypíše "Hello"
console.log(arr); // Vypíše [1, 2, 3]
