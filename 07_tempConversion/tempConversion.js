const ftoc = function(temp) {
  if (!isNaN(temp))
    return Math.round(((temp - 32) * 5/9) * 10) / 10;
};

const ctof = function(temp) {
  if (!isNaN(temp)) 
    return Math.round((temp * 1.8 + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
