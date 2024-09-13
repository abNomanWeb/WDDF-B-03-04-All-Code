//function parameter & function argument
function addNumber(num1 = 0, num2 = 0){
    return(`${num1 + num2}`);
}

let number1 = parseInt(prompt("Type First Number:"));
let number2 = parseInt(prompt("Type Second Number:"));

console.log(addNumber(number1, number2));