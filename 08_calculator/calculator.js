const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
   let result=arr.reduce((total, item) => {
    return total + item;
  },0);
  return result;
};

const multiply = function (arr) {
  let result=arr.reduce((total, item) => {
    return total * item;
  },);
  return result;
};

const power = function (num,pow) {
let result=Math.pow(num,pow);
return result;
};

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
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
