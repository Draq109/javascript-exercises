const fibonacci = function(num) {
    if (num === 1 || num === 2)
        return 1;
    if (num < 0)
        return "OOPS";
    let fib = [1,1];
    let prevVal, nextVal = 1;
    for (let i = 0; i < num; i++) {
        prevVal = fib[i];
        nextVal += prevVal;
        fib.push(nextVal);
    }
    return fib[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
