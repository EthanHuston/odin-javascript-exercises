const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((prev, value) => {
    return prev + value;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((prev, value) => {
    return prev * value;
  }, 1);
};

const power = function (num, pow) {
  return num ** pow;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
