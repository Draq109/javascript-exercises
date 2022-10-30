const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  return array.reduce((prevVal, nextVal) => {
    return prevVal + nextVal;
  }, 0)
};

const multiply = function (array) {
  return array.reduce((prevVal, nextVal) => {
    return prevVal * nextVal;
  })
};

const power = function (num, exp) {
  return num ** exp;
};

const factorial = function (num) {
  if (num === 0 || num === 1)
    return 1;

  let total = num;
  for (let i = 1; i < num; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
