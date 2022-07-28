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
  (this.add = (a, b) => a + b), (this.subtract = (a, b) => a - b);
  (this.divide = (a, b) => a / b), (this.multiply = (a, b) => a * b);
}

//that takes a string and returns it with each character “shifted”
function caesarCipher(string) {
  const lookupAlphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  const lookupIndex = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    10: "j",
    11: "k",
    12: "l",
    13: "m",
    14: "n",
    15: "o",
    16: "p",
    17: "q",
    18: "r",
    19: "s",
    20: "t",
    21: "u",
    22: "v",
    23: "w",
    24: "x",
    25: "y",
    26: "z",
  };

  const splitString = string.split("");
  const shiftedArr = splitString.map((sign) => {
    return lookupAlphabet[sign.toLowerCase()] === undefined
      ? sign
      : lookupIndex[(lookupAlphabet[sign.toLowerCase()] + 1) % 26];
  });

  return shiftedArr.join("");
}

// takes an array of numbers and returns an object with the following properties: average, min, max, and length
function analyzeArray(array) {
  const average = array.reduce((acc, val) => acc + val) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;

  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = {
  sum,
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
};
