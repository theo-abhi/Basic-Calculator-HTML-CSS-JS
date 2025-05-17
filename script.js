const calculateScreen = document.querySelector(".calculate-screen");
const resultScreen = document.querySelector(".result-screen");

// Variable to store the calculation value
let calculateValue = "";

// Array of valid operators
const operators = ["%", "/", "*", "-", "+"];

// Function to add a value to the calculation screen
function addCalculateScreen(value) {
  // Append the value to the calculation screen
  calculateValue += value;
  // Update the calculation screen display
  calculateScreen.value = calculateValue;
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
  if (resultScreen.value != "") {
    calculateValue = resultScreen.value;
    resultScreen.value = "";
  }

  addCalculateScreen(operatorValue);
}

// Function called when equals (=) button is pressed

function tapResult() {
  // Prevent the equals button from being pressed
  // if the calculateValue has operator at the end
  if (operators.some((operator) => calculateValue.at(-1) == operator)) return;
  else {
    try {
      resultScreen.value = eval(calculateValue);
    } catch (error) {
      resultScreen.value = "Error";
    }
  }
}

// Function called when All-Clear (AC) button is pressed
function tapClear() {
  // clear the calculation screen display
  calculateScreen.value = "";
  // clear the result screen display
  resultScreen.value = "";
  // clear the calculation value
  calculateValue = "";
}

// Function called when delete (DEL) button is pressed

function tapDelete() {
  // Remove the last character
  // from the calculation string
  calculateValue = calculateValue.slice(0, -1);
  // Update calculate screen display
  calculateScreen.value = calculateValue;
  // Clear the result screen
  resultScreen.value = "";
}
