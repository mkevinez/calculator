let firstNum;
let secondNum;
let operator;

operate(5,2,"-");
console.log(firstNum);


function operate (num1, num2, operator) {
    switch(operator) {
        case "+": 
            firstNum = add(num1 , num2);
            break;
        case "-": 
            firstNum = subtract(num1 , num2);
            break;
        case "*": 
            firstNum = multiply(num1 , num2);
            break;
        case "/": 
            firstNum = divide(num1 , num2);
            break;
    }
}

function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}



