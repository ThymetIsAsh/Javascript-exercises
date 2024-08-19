const repeatString = function (string, num) {
    if (num == -1) return "ERROR";
    let result = "";
    for (let i = 0; i < num; i++) {
        result += string;

    }
    return result;

};

const number = Math.floor(Math.random() * 1000);

repeatString('hey', 3);
repeatString('hello', 10);
repeatString('hi', 1);
repeatString('bye', 0);
repeatString('goodbye', -1);
repeatString('', 10);
repeatString('odin', number);




// Do not edit below this line
module.exports = repeatString;

