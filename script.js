const calculateScreen = document.querySelector(".calculate");
const resultScreen = document.querySelector(".result");

// Variable to store the calculation value
let calculateValue = "";

// Array of valid operators
const operators = ["%", "/", "*", "-", "+"];

// Function to add a value to the calculation screen
function addCalculateScreen(value) {
  // Append the value to the calculation screen
  calculateValue += value;
  // Update the calculation screen display
  calculateScreen.textContent = calculateValue;
}

// Function called when a number is pressed
function tapNumber(numValue) {
  // Prevent a decimal point from being added
  // when the calculation string is empty
  if (calculateValue == "" && numValue == ".") {
    return;
  }

  // Prevent consecutive decimal points from being added
  if (calculateValue.at(-1) == "." && numValue == ".") {
    return;
  }
  // Add the number to the calculation screen
  addCalculateScreen(numValue);
}

// Function called when an operator is pressed
function tapOperator(operatorValue) {
  // Do not allow an operator to print
  // if calculation screen display is empty
  if (calculateValue == "") return;
  // Prevent consecutive operators from being added
  if (operators.some((operator) => calculateValue.at(-1) == operator)) {
    return;
  }
  // If there is a previous result,
  // use that as the starting value
  // for the next calculation
  if (resultScreen.textContent != "") {
    calculateValue = resultScreen.textContent;
    resultScreen.textContent = "";
  }

  addCalculateScreen(operatorValue);
}

// Function called when equals (=) button is pressed

function tapResult() {
  try {
    resultScreen.textContent = eval(calculateValue);
  } catch (error) {
    resultScreen.textContent = "Error";
  }
}

// Function called when All-Clear (AC) button is pressed
function tapClear() {
  // clear the calculation screen display
  calculateScreen.textContent = "";
  // clear the result screen display
  resultScreen.textContent = "";
  // clear the calculation value
  calculateValue = "";
}

// Function called when delete (DEL) button is pressed

function tapDelete() {
  // Remove the last character
  // from the calculation string
  calculateValue = calculateValue.slice(0, -1);
  // Update calculate screen display
  calculateScreen.textContent = calculateValue;
  // Clear the result screen
  resultScreen.textContent = "";
}
