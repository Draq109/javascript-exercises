const findTheOldest = function (array) {
    const sortedPeople = array.sort((a, b) => {
        if (!('yearOfDeath' in a))
            if (a.yearOfBirth < b.yearOfBirth)
                return -1;
            else
                return 1;

        if (!('yearOfDeath' in b))
            if (b.yearOfBirth < a.yearOfBirth)
                return 1;
            else
                return -1;


        if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth)
            return -1;
        else
            return 1;
    })
    return sortedPeople[0];
};


// Do not edit below this line
module.exports = findTheOldest;
