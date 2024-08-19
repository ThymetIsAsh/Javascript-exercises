const leapYears = function (yeAr) {
    let result;
    if ((yeAr % 4 === 0 && yeAr % 100 !== 0) || (yeAr % 400 === 0)) {
        result = true
    } else result = false;
    return result;

};

leapYears(2000);
leapYears(1985);
leapYears(1985);
leapYears(34992);
leapYears(1900);
leapYears(1600);
leapYears(700);

// Do not edit below this line
module.exports = leapYears;
