const buttons = document.querySelectorAll("button");
// const previousScreen = document.querySelector(".previous");
const display = document.querySelector("#display");

let currentOperation = null;
let firstValue = null;
let secondValue = null;
let shouldRestDisplay = false;

buttons.forEach((button) =>
  button.addEventListener("click", () => handleButtonClick(button.textContent))
);

function handleButtonClick(value) {
  // checks what kind of button was clicked,Is the button a number? or a dot (.)
  if (!isNaN(value) || value === ".") {
    appendNumber(value);
  } else if (value === "AC") {
    clearAll(); // If it's "AC", clear everything
  } else if (value === "=") {
    evaluate(); // If it's "=", do the math
  } else {
    setOperation(value); // Otherwise, it's an operation like +, -, *, or /.
  }
}

function appendNumber(number) {
  //if the value of display is 0 then display the value clicked by user or if shouldRestDisplay is true then
  if (display.textContent === "0" || shouldRestDisplay) {
    display.textContent = number;
    shouldRestDisplay = false;
  } else {
    display.textContent += number;
  }
}

function setOperation(operator) {
  if (currentOperation != null) evaluate();
  firstValue = parseFloat(display.textContent);
  currentOperation = operator;
  shouldRestDisplay = true;
}

function evaluate() {
  if (currentOperation === null || shouldRestDisplay) return;
  secondValue = parseFloat(display.textContent);
  display.textContent = calculate(currentOperation, firstValue, secondValue);
  currentOperation = null;
}

function clearAll() {
  display.textContent = "0";
  firstValue = null;
  secondValue = null;
  currentOperation = null;
  shouldRestDisplay = false;
}

function calculate(operator, first, second) {
  switch (operator) {
    case "+":
      return first + second;

    case "-":
      return first - second;

    case "x":
      return first * second;

    case "/":
      return second === 0 ? "Error" : first / second;

    default:
      return null;
  }
}
