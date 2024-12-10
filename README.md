## Calculator Project

A simple and responsive calculator built using **HTML**, **CSS**, and **JavaScript**. This project performs basic arithmetic operations and includes percentage and error handling functionality.

---

## Features

- Basic arithmetic operations: Addition, Subtraction, Multiplication, and Division.
- Percentage functionality:
  - Single number percentage (e.g., `50%` becomes `0.5`).
  - Percentage in operations (e.g., `50 + 20%` calculates `20% of 50` and adds it to `50`).
- Clear all functionality (`AC` button resets the calculator).
- Handles division by zero with an error message.
- Rounds floating-point results to a maximum of 10 significant digits.
- Displays integers without unnecessary decimals.
- Responsive design for both desktop and mobile.

---

## How to Use

1. **Start Calculations**: 
   - Click on the number buttons to input numbers.
   - Use the operator buttons (`+`, `-`, `x`, `/`) for operations.
2. **Percentage**:
   - Click the `%` button after a number to calculate its percentage.
   - During an operation, the percentage is calculated relative to the first number.
3. **Clear Display**:
   - Use the `AC` button to reset all inputs and operations.
4. **Result**:
   - Press `=` to display the result.

---

## Technologies Used

- **HTML**: For the structure of the calculator.
- **CSS**: For styling and responsive design.
- **JavaScript**: For the interactive functionality of the calculator.

---

## Code Highlights

1. **Dynamic Display Update**:
   - The `appendNumber` function ensures seamless input handling.
2. **Clean Formatting**:
   - Results are formatted to remove unnecessary decimals or trailing zeros.
3. **Error Handling**:
   - Division by zero returns `Error` instead of breaking the calculator.

---

## Demo
