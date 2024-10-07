// Proměnné s explicitním typem
let FullName: string = "John Doe";
let age: number = 25;
let isStudent: boolean = true;
let numbers: number[] = [1, 2, 3, 4, 5];

// Funkce multiply
function multiply(a: number, b: number, showResult?: boolean): number {
    const result = a * b;
    if (showResult) {
        console.log(result);
    }
    return result;
}

// Testování funkce multiply
multiply(3, 4, true);  // Vypíše 12
const result = multiply(5, 6,);  // Vrátí 30, ale nic nevypíše






function getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`
}

let fullNameResult: string = getFullName("John", "Doe")
console.log(fullNameResult)





// Rozhraní Car
interface Car {
    make: string;
    model: string;
    year: number;
}

// Proměnná typu Car
const myCar: Car = {
    make: "Tesla",
    model: "Cybertruck",
    year: 2023
};

// Vypisování značky a modelu auta
console.log(`Car make: ${myCar.make}, model: ${myCar.model}`);




// Funkce greet s volitelným parametrem greeting
function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}

// Testování funkce greet
console.log(greet("Alice"));  // Vypíše "Hello, Alice!"
console.log(greet("Bob", "Hi"));  // Vypíše "Hi, Bob!"



// Funkce printId, která přijímá id různých typů
function printId(id: number | string): void {
    if (typeof id === 'number') {
        console.log(`ID is a number: ${id}`);
    } else {
        console.log(`ID is a string: ${id}`);
    }
}

// Testování funkce printId
printId(123);  // Vypíše "ID is a number: 123"
printId("ABC123");  // Vypíše "ID is a string: ABC123"


// Funkce identity s použitím generik
function identity<T>(arg: T): T {
    return arg;
}

// Testování funkce identity s různými typy
const num = identity<number>(10);  // Vrátí 10
const str = identity<string>("Hello");  // Vrátí "Hello"
const arr = identity<number[]>([1, 2, 3]);  // Vrátí [1, 2, 3]

console.log(num);  // Vypíše 10
console.log(str);  // Vypíše "Hello"
console.log(arr);  // Vypíše [1, 2, 3]
