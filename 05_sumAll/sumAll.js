const sumAll = function(num1, num2) {
    let total = 0, temp;
    console.log(isNaN(num2));
    if (typeof num1 === 'string' || typeof num2 === 'string')
        return 'ERROR';


    if (!isNaN(num1) && !isNaN(num2) && num1 >= 0 && num2 >= 0) {
        if (num1 > num2) 
            for (let i = num2; i <= num1; i++)
                total += i;
        else
            for (let i = num1; i <= num2; i++)
                total += i;
    }
    else
        return 'ERROR';

    return total;
};

// Do not edit below this line
module.exports = sumAll;
