const display = document.getElementById("display");

function appendToDisplay(input) {
  // if (input === "." && display.value.includes(".")) return;
  display.value += input;
}

function deleteLastDigit() {
  if (display.value === "") return;
  display.value = display.value.slice(0, -1);
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
