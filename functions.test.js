const functions = require("./functions");

//sum test
const sum = functions.sum;

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

//capitalize test
const capitalize = functions.capitalize;

test("changes 'hello' to 'Hello'", () => {
  expect(capitalize("hello")).toMatch(/Hello/);
});

//reverseString test
const reverseString = functions.reverseString;

test("changes 'hello' to 'olleh'", () => {
  expect(reverseString("hello")).toMatch(/olleh/);
});

//calculator test
const calculator = new functions.Calculator();

test("performs basic mathematical operations for numbers 1, 2", () => {
  const data = {
    add: calculator.add(1, 2),
    subtract: calculator.subtract(1, 2),
    multiply: calculator.multiply(1, 2),
    divide: calculator.divide(1, 2),
  };
  expect(data).toEqual({
    add: 3,
    subtract: -1,
    multiply: 2,
    divide: 0.5,
  });
});

//caesarCipher test
const caesarCipher = functions.caesarCipher;

test("changes 'abC, Z' to 'bcd, a", () => {
  expect(caesarCipher("abC, Z")).toMatch(/bcd, a/);
});

//analyzeArray test
const analyzeArray = functions.analyzeArray;

test("get average, min, max, and length of [1,8,3,4,2,6]", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
