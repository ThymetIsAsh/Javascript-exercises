const fibonacci = (num)=> {
    const value=Number(num);
    if(value<0) return "OOPS"
    let a = 0, b = 1;
    for (let i = 2; i <= value; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return value === 0 ? a : b;
};

// Do not edit below this line
module.exports = fibonacci;
