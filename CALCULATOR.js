let displayValue = '';
let operator = '';
let firstValue = '';
let secondValue = '';

function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;
}

function setOperator(op) {
    if (displayValue !== '') {
        operator = op;
        firstValue = displayValue;
        displayValue = '';
        document.getElementById('display').value = displayValue;
    }
}

function calculate() {
    if (displayValue !== '' && operator !== '') {
        secondValue = displayValue;
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(firstValue) + parseFloat(secondValue);
                break;
            case '-':
                result = parseFloat(firstValue) - parseFloat(secondValue);
                break;
            case '*':
                result = parseFloat(firstValue) * parseFloat(secondValue);
                break;
            case '/':
                result = parseFloat(firstValue) / parseFloat(secondValue);
                break;
        }
        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
        operator = '';
        firstValue = '';
        secondValue = '';
    }
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    firstValue = '';
    secondValue = '';
    document.getElementById('display').value = '';
}
