/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}

function addNumbers() {
    // Get the values of the input elements
    let add1Value = Number(document.querySelector('#add1').value);
    let add2Value = Number(document.querySelector('#add2').value);

    document.querySelector("#sum").value = add(add1Value,add2Value);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */




/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector("#product").value = multiply(factor1,factor2);
}

var label = document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend/divisor;

const divideNumbers = () => {
    var dividend = Number(document.querySelector('#dividend').value);
    var divisor = Number(document.querySelector('#divisor').value);

    return document.querySelector("#quotient").value = divide(dividend,divisor);
}
var input = document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let yearinput = document.querySelector("#year");
yearinput = currentYear;



/* ARRAY METHODS - Functional Programming */

/* Output Source Array */
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let arrayInput = document.querySelector("#array");
arrayInput.textContent = array.join(", "); // Assign the array as text content

/* Output Odds Only Array */
let odds = array.filter(function (num) {
    return num % 2 === 1;
});
let oddsInput = document.querySelector("#odds");
oddsInput.textContent = odds.join(", "); // Assign the odds array as text content

/* Output Evens Only Array */
let evens = array.filter(function (num) {
    return num % 2 === 0;
});
let evensInput = document.querySelector("#evens");
evensInput.textContent = evens.join(", "); // Assign the evens array as text content

/* Output Sum of Org. Array */
const sum = array.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);
let arraySum = document.querySelector("#sumOfArray");
arraySum.textContent = sum; // Assign the sum as text content

/* Output Multiplied by 2 Array */
const multi = array.map(number => {
    return number * 2;
});
let arrayMulti = document.querySelector("#multiplied");
arrayMulti.textContent = multi.join(", "); // Assign the multiplied array as text content

/* Output Sum of Multiplied by 2 Array */
const sumOfMulti = multi.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);
let arraysumOfMulti = document.querySelector("#sumOfMultiplied");
arraysumOfMulti.textContent = sumOfMulti; // Assign the sum of multiplied array as text content
