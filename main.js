let firstOperand = '';
let secondOperand = '';
let operator = null;

const clearButton = document.getElementById('clearBtn');
const delButton = document.getElementById('deleteBtn');
const pointButton = document.getElementById('pointBtn');
const equalsButton = document.getElementById('equalsBtn');
const lastOperationScreen = document.getElementById('lastOperationScreen');
const currentOperationScreen = document.getElementById('currentOPerationScreen');

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
    num2 = NUmber(num2);
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