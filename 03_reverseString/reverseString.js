const reverseString = function (fName) {
    let reversed = fName.split('').reverse().join('');
    
    return reversed;
};

reverseString('hello there');

// Do not edit below this line
module.exports = reverseString;
