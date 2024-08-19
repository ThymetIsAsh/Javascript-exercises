const convertToCelsius = function (fahrenHeit) {
  let result = (fahrenHeit - 32) * 5 / 9;
  result = Math.round(result * 10) / 10;
  return result;
};

const convertToFahrenheit = function (celSius) {
  let result=(celSius*9/5) +32;
  result = Math.round(result * 10) / 10;
  return result;
};

convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);
convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
