const reverseString = function(string) {
    //if (/^[a-zA-Z0-9\s.,!?]+$/.test(string))
    // if statement will check only for letters,numbers,periods,commas, etc.
    let reverse = '';
    for (let i = string.length - 1; i >= 0; i--) 
        reverse += string[i];
    return reverse
};

console.log(reverseString("Hello World."));


// Do not edit below this line
module.exports = reverseString;
