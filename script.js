const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const decimal = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equal = document.querySelector(".equal");

let currentNumber = "0";

// Function to clear display
function clearDisplay() {
  display.textContent = "0";
  currentNumber = "0";
}

// Function to add numbers
