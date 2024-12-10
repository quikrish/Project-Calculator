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
  } else if (value === "%") {
    handlePercentage(); // Handle percentage functionality
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
  let result = calculate(currentOperation, firstValue, secondValue);

  // Format the result before displaying
  display.textContent = formatResult(result);
  currentOperation = null;
}

function formatResult(result) {
  if (isNaN(result) || result === "Error") return result; // Handle special cases

  // Check if the result is an integer
  if (Number.isInteger(result)) {
    return result.toString(); // Return as a string without decimals
  }

  // If not an integer, format to a maximum of 10 significant digits
  let formatted = parseFloat(result).toPrecision(10);

  // Remove trailing zeros and unnecessary decimal points
  return parseFloat(formatted).toString();
}
function handlePercentage() {
  // If the user enters a single number and presses "%", convert it to its percentage
  if (currentOperation === null) {
    display.textContent = (parseFloat(display.textContent) / 100).toString();
  } else {
    // If in the middle of an operation, treat it as "percentage of firstValue"
    secondValue = parseFloat(display.textContent);
    display.textContent = parseFloat(
      firstValue * (secondValue / 100)
    ).toPrecision(10);
    shouldResetDisplay = true; // Prepare to reset the display for new input
  }
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
