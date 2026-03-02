let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

let operation = prompt("Enter operation (+, -, *, /):");

let result;

if (operation === "+") {
    result = num1 + num2;
} 
else if (operation === "-") {
    result = num1 - num2;
} 
else if (operation === "*") {
    result = num1 * num2;
} 
else if (operation === "/") {
    result = num1 / num2;
} 
else {
    result = "Invalid Operation";
}

alert("Result is: " + result);