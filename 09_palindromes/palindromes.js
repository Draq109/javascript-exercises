const palindromes = function (string) {

    let stripped = string.replace(/[\s.,!?]/g, '');
    stripped = stripped.toLowerCase();
    let j = stripped.length - 1;
    for (let i = 0; i < stripped.length / 2; i++) {
        if (stripped[i] === stripped[j]) {
            j--;
            continue;
        }
        else
            return false;
    }
    return true;
};
console.log(palindromes('racecar'));

// Do not edit below this line
module.exports = palindromes;
