let currentInput = '';
let firstOperand = '';
let currentOperation = '';
let resultShown = false;

function appendNumber(number) {
  if (resultShown) {
    currentInput = '';
    resultShown = false;
  }
  currentInput += number;
  updateDisplay(currentInput);
}

function chooseOperation(operation) {
  if (currentInput === '') return;
  if (firstOperand !== '') {
    compute();
  }
  firstOperand = currentInput;
  currentOperation = operation;
  currentInput = '';
}

function compute() {
  let result;
  const prev = parseFloat(firstOperand);
  const curr = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(curr)) return;

  switch (currentOperation) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = curr === 0 ? 'Error' : prev / curr;
      break;
    default:
      return;
  }

  updateDisplay(result);
  currentInput = result.toString();
  firstOperand = '';
  currentOperation = '';
  resultShown = true;
}

function clearDisplay() {
  currentInput = '';
  firstOperand = '';
  currentOperation = '';
  updateDisplay('0');
}

function updateDisplay(value) {
  document.getElementById('display').textContent = value;
}
