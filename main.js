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

equalsButton.addEventListener('click', () => {
    const currentScreen = screen.textContent.replace(/\s/g, '');
    const parts = currentScreen.split(/([+\-*/])/);
    if (parts.length === 3) {
        const [num1, op, num2] = parts;
        firstOperand = num1;
        secondOperand = num2;
        operator = op;
        operate(operator, firstOperand, secondOperand);
    } else {
        return;
    }
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

function roundResult(number) {
    return Math.round(number * 100) / 100;
}

function operate(operator, num1, num2) {
    let result;
    num1 = Number(num1);
    num2 = Number(num2);
    switch(operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            if (num2 === 0) {
                alert('Divide by zero.')
            }
            else {
                result = divide(num1, num2);
            }
            break;
        }
    screen.textContent = roundResult(result);                
    firstOperand = result;
    secondOperand = '';
    operator = '';
}

function appendNumber(number) {
    if (screen.textContent === '0') {   
    screen.textContent = number;
   } else {
    screen.textContent += number;
   }
}

function appendSymbol(symbol) {
    const operators = ['+', '-', '*', '/']
    const lastChar = screen.textContent.trim().at(-1);
    if (operators.includes(lastChar)) {
      return;
    } else {
    screen.textContent += ` ${symbol} `;
    operator = symbol;
    }
}

