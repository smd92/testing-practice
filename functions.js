//adds two numbers
function sum(a, b) {
    return a + b;
  }

//takes a string and returns it with the first character capitalized
function capitalize(string) {
    return string.replace(string[0], string[0].toUpperCase());
}

//takes a string and returns it reversed
function reverseString(string) {
  const splitStringArr = string.split("");
  const reverseArr = splitStringArr.reverse();
  const revString = reverseArr.join("");
  return revString;
}

//contains functions for the basic operations: add, subtract, divide, and multiply
function Calculator() {
  this.add = (a, b) => a + b,
  this.subtract = (a, b) => a - b
  this.divide = (a, b) => a / b,
  this.multiply = (a, b) => a * b
}


  module.exports = {
    sum,
    capitalize,
    reverseString,
    Calculator
  }