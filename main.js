let firstOperand = '';
let secondOperand = '';
let operator = '';

const numberButtons = document.querySelectorAll('.number-btn');
const operatorButtons = document.querySelectorAll('.symbol-btn');
const clearButton = document.getElementById('clearBtn');
const delButton = document.getElementById('deleteBtn');
const pointButton = document.getElementById('pointBtn');
const equalsButton = document.getElementById('equalsBtn');
const screen = document.getElementById('currentScreen');
screen.textContent = '0';

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => appendSymbol(button.textContent.trim()))
)

clearButton.addEventListener('click', () => {
    screen.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    operator = '';
})

delButton.addEventListener('click', () => {
    if (screen.textContent.length > 1) {
      screen.textContent = screen.textContent.slice(0, -1).trim()
    }
    else {
      screen.textContent = '0';
    }
})

pointButton.addEventListener('click', () => {
    if (screen.textContent.at(-1) === '.') {
        return;
    }
    screen.textContent += '.'
})

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (b === 0) {
        return alert('Divide by zero')
    }
    else if (operator === '+') {
        return add(num1, num2);
    }
    else if (operator === '-') {
        return subtract(num1, num2)
    }
    else if (operator === '*') {
        return multiply(num1, num2)
    }
    else if (operator === '/') {
        return divide(num1, num2)
    }
}

function appendNumber(number) {
    if (screen.textContent === '0') {   
    screen.textContent = number;
   } else {
    screen.textContent += number;
   }
}

function appendSymbol(symbol) {
    if (screen.textContent.includes(symbol)) {
      return;
    } else {
    screen.textContent += ` ${symbol} `;
    operator = symbol;
    }
}

