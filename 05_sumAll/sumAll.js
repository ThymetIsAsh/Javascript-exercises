const sumAll = function (staRt, eNd) {
    if (!Number.isInteger(staRt) || !Number.isInteger(eNd)) return "ERROR";
    if (staRt < 0 || eNd < 0) return "ERROR";

    let mIn,mAx,result=0;
    mIn=Math.min(staRt,eNd)
    mAx=Math.max(staRt,eNd)

    for (let i = mIn; i <= mAx; i++) {
        result += i;
    }
    return result;

};

sumAll(1,4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(2.5, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
