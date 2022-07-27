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
