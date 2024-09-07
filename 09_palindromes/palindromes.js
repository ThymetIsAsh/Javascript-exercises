const palindromes = (string) =>{
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const rmvStr = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

let rev=rmvStr.split('').reverse().join('');
return rmvStr===rev;
};


// Do not edit below this line
module.exports = palindromes;
