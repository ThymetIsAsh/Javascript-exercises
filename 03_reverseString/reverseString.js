const reverseString = function (fName) {
    let reversed = fName.split("").reverse().join("");
    return reversed;
};

reverseString('hello');
reverseString('hello there');
reverseString('123! abc! Hello, Odinite.');
reverseString('');

// Do not edit below this line
module.exports = reverseString;
