//adds two numbers
function sum(a, b) {
    return a + b;
  }

//takes a string and returns it with the first character capitalized
function capitalize(string) {
    return string.replace(string[0], string[0].toUpperCase());
}

console.log(capitalize("asdasd"))

  module.exports = {
    sum,
    capitalize,
  }